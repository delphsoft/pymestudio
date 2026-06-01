// api/mp-webhook.js
// Vercel Serverless Function — recibe notificaciones de Mercado Pago
// ENV vars necesarias:
//   MP_ACCESS_TOKEN      — Access Token de MP
//   SUPABASE_URL         — ej: https://xxxx.supabase.co
//   SUPABASE_SERVICE_KEY — Service Role key (NO la anon key)
//   RESEND_API_KEY       — (opcional) para enviar email de confirmación
//   BASE_URL             — ej: https://pymestudio.xyz

module.exports = async (req, res) => {
  // MP siempre espera 200 rápido
  res.status(200).end();

  if (req.method !== 'POST') return;

  const { type, data } = req.body || {};
  if (type !== 'payment' || !data?.id) return;

  try {
    // 1. Verificar pago con la API de MP
    const mpRes = await fetch(
      `https://api.mercadopago.com/v1/payments/${data.id}`,
      { headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` } }
    );
    const payment = await mpRes.json();

    if (payment.status !== 'approved') return;

    // 2. Parsear external_reference: user_id|plan|billing
    const [user_id, plan, billing] = (payment.external_reference || '').split('|');
    if (!user_id || !plan) return;

    const SB_URL = process.env.SUPABASE_URL;
    const SB_KEY = process.env.SUPABASE_SERVICE_KEY;
    const sbHeaders = {
      apikey: SB_KEY,
      Authorization: `Bearer ${SB_KEY}`,
      'Content-Type': 'application/json',
    };

    // 3. Actualizar profile: plan activo
    await fetch(`${SB_URL}/rest/v1/profiles?id=eq.${user_id}`, {
      method: 'PATCH',
      headers: sbHeaders,
      body: JSON.stringify({ plan, plan_status: 'active' }),
    });

    // 4. Guardar registro de pago
    await fetch(`${SB_URL}/rest/v1/pagos`, {
      method: 'POST',
      headers: { ...sbHeaders, Prefer: 'return=minimal' },
      body: JSON.stringify({
        user_id,
        plan,
        billing: billing || 'monthly',
        monto: payment.transaction_amount,
        mp_payment_id: String(payment.id),
        mp_order_id: payment.order ? String(payment.order.id) : null,
        estado: 'aprobado',
        email: payment.payer?.email || '',
        metodo: payment.payment_type_id || '',
      }),
    });

    // 5. Email de confirmación con Resend (opcional)
    if (process.env.RESEND_API_KEY) {
      const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
      const amount = new Intl.NumberFormat('es-AR', {
        style: 'currency', currency: 'ARS', maximumFractionDigits: 0,
      }).format(payment.transaction_amount);

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'PymeStudio <hola@pymestudio.xyz>',
          to: payment.payer?.email,
          subject: `✅ Pago confirmado — Plan ${planLabel}`,
          html: buildPaymentConfirmEmail({
            nombre:        payment.payer?.first_name || '',
            plan:          planLabel,
            billing:       billing || 'monthly',
            amount,
            mp_payment_id: String(payment.id),
            portal_url:    `${process.env.BASE_URL}/portal.html`,
          }),
        }),
      });
    }
  } catch (err) {
    console.error('Webhook error:', err);
  }
};

function buildPaymentConfirmEmail({ nombre, plan, billing, amount, mp_payment_id, portal_url }) {
  const billingLabel = billing === 'yearly' ? 'Anual' : 'Mensual';
  const nombreStr    = nombre ? ` <strong>${nombre}</strong>,` : ',';
  const mpId         = mp_payment_id ? `MP-${mp_payment_id}` : '—';

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#F4EFE6;font-family:'Helvetica Neue',Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F4EFE6;padding:48px 20px">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid rgba(0,0,0,.07);box-shadow:0 8px 40px rgba(0,0,0,.08)">

      <!-- Header -->
      <tr><td style="background:#1C1A14;padding:26px 36px">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="color:#F4EFE6;font-size:17px;font-weight:600;letter-spacing:-.01em">PymeStudio</td>
          <td align="right" style="color:rgba(244,239,230,.45);font-size:12px">pymestudio.xyz</td>
        </tr></table>
      </td></tr>

      <!-- Accent bar verde -->
      <tr><td style="background:linear-gradient(90deg,#1E7A4A 0%,#2BAF68 50%,#1E7A4A 100%);height:3px"></td></tr>

      <!-- Body -->
      <tr><td style="padding:40px 36px 0">

        <!-- Check icon -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px">
          <tr><td align="center">
            <table cellpadding="0" cellspacing="0"><tr>
              <td style="width:64px;height:64px;border-radius:50%;background:#ddf1e4;text-align:center;line-height:64px;font-size:32px;font-weight:700;color:#1E7A4A">✓</td>
            </tr></table>
          </td></tr>
        </table>

        <h1 style="margin:0 0 8px;font-size:26px;font-weight:700;color:#1C1A14;letter-spacing:-.03em;line-height:1.2;text-align:center">¡Pago confirmado!</h1>
        <p style="margin:0 0 28px;font-size:15px;color:#5C5749;line-height:1.6;text-align:center">Hola${nombreStr} tu suscripción quedó activada.</p>

        <!-- Detail box -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4EFE6;border-radius:12px;margin-bottom:20px">
          <tr><td style="padding:20px 24px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:13px;color:#8C8579;padding-bottom:12px">Plan</td>
                <td style="font-size:13px;font-weight:600;color:#1C1A14;text-align:right;padding-bottom:12px">${plan}</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#8C8579;padding-bottom:12px;border-top:1px solid rgba(0,0,0,.07);padding-top:12px">Período</td>
                <td style="font-size:13px;font-weight:600;color:#1C1A14;text-align:right;border-top:1px solid rgba(0,0,0,.07);padding-top:12px;padding-bottom:12px">${billingLabel}</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#8C8579;padding-bottom:12px;border-top:1px solid rgba(0,0,0,.07);padding-top:12px">Monto</td>
                <td style="font-size:15px;font-weight:700;color:#1C1A14;text-align:right;border-top:1px solid rgba(0,0,0,.07);padding-top:12px;padding-bottom:12px">${amount}</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#8C8579;border-top:1px solid rgba(0,0,0,.07);padding-top:12px">N° de pago</td>
                <td style="font-size:12px;font-weight:500;color:#8C8579;text-align:right;border-top:1px solid rgba(0,0,0,.07);padding-top:12px;font-family:monospace">${mpId}</td>
              </tr>
            </table>
          </td></tr>
        </table>

        <!-- Estado badge -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
          <tr><td align="center">
            <table cellpadding="0" cellspacing="0"><tr>
              <td style="background:#ddf1e4;border-radius:999px;padding:6px 18px;font-size:13px;font-weight:600;color:#1E7A4A">✓ Pago aprobado por Mercado Pago</td>
            </tr></table>
          </td></tr>
        </table>

        <!-- CTA -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px">
          <tr><td align="center">
            <a href="${portal_url}" style="background:#1C1A14;color:#F4EFE6;text-decoration:none;padding:16px 40px;border-radius:12px;font-size:15px;font-weight:600;display:inline-block;letter-spacing:-.01em">Ir a mi cuenta →</a>
          </td></tr>
        </table>

      </td></tr>

      <!-- Divider -->
      <tr><td style="padding:0 36px"><div style="height:1px;background:rgba(0,0,0,.07)"></div></td></tr>

      <!-- Footer -->
      <tr><td style="padding:24px 36px">
        <p style="margin:0 0 6px;font-size:13px;color:#8C8579;text-align:center">¿Dudas sobre tu pago? Escribinos a <a href="mailto:hola@pymestudio.xyz" style="color:#C24A1F;text-decoration:none">hola@pymestudio.xyz</a></p>
        <p style="margin:8px 0 0;font-size:11.5px;color:#B0A898;text-align:center">PymeStudio · pymestudio.xyz · Buenos Aires, Argentina<br>Recibís este email porque realizaste un pago en pymestudio.xyz</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}
