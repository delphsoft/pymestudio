// api/mp-preference.js
// Vercel Serverless Function — crea una preferencia de pago en Mercado Pago
// ENV vars necesarias (Vercel → Settings → Environment Variables):
//   MP_ACCESS_TOKEN  — tu Access Token de producción o sandbox de MP
//   BASE_URL         — ej: https://pymestudio.xyz

const { MercadoPagoConfig, Preference } = require('mercadopago');

const PRICES = {
  inicial: 25000,
  negocio: 40000,
};

module.exports = async (req, res) => {
  // CORS para llamadas desde el mismo dominio
  res.setHeader('Access-Control-Allow-Origin', process.env.BASE_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const { plan, email, nombre, user_id, billing = 'monthly' } = req.body || {};

  if (!plan || !email || !user_id) {
    return res.status(400).json({ error: 'Faltan campos: plan, email, user_id' });
  }

  const basePrice = PRICES[plan];
  if (!basePrice) {
    return res.status(400).json({ error: 'Plan inválido. Opciones: inicial, negocio' });
  }

  // Descuento del 20% si paga anual
  const unit_price = billing === 'yearly'
    ? Math.round(basePrice * 0.8 * 12) // precio anual con descuento
    : basePrice;

  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
  const billingLabel = billing === 'yearly' ? 'Anual' : 'Mensual';
  const BASE = process.env.BASE_URL || 'https://pymestudio.xyz';

  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN,
    });

    const pref = new Preference(client);
    const result = await pref.create({
      body: {
        items: [
          {
            id: `pymestudio-${plan}-${billing}`,
            title: `PymeStudio — Plan ${planLabel} (${billingLabel})`,
            description: billing === 'yearly'
              ? `Suscripción anual con 20% de descuento`
              : `Suscripción mensual`,
            unit_price,
            quantity: 1,
            currency_id: 'ARS',
          },
        ],
        payer: {
          name: nombre || '',
          email,
        },
        // user_id|plan|billing — lo usamos en el webhook para actualizar Supabase
        external_reference: `${user_id}|${plan}|${billing}`,
        back_urls: {
          success: `${BASE}/portal.html?pago=ok&plan=${plan}`,
          failure: `${BASE}/portal.html?pago=error`,
          pending: `${BASE}/portal.html?pago=pendiente`,
        },
        auto_return: 'approved',
        notification_url: `${BASE}/api/mp-webhook`,
        statement_descriptor: 'PYMESTUDIO',
        expires: false,
      },
    });

    return res.status(200).json({
      id: result.id,
      init_point: result.init_point,       // producción
      sandbox_init_point: result.sandbox_init_point, // sandbox
    });
  } catch (err) {
    console.error('MP error:', err);
    return res.status(500).json({ error: 'Error creando preferencia', detail: err.message });
  }
};
