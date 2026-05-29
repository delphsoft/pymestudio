// === Reusable product page =================================================
const { useState: useStateProd, useEffect: useEffectProd } = React;

// — Hero visuals (one per product) ——————————————————————————————

function HeroFactura() {
  return (
    <div className="hero__visual hero__visual--video" style={{aspectRatio:'4/5'}}>
      <div className="hero__visual-tag"><span className="dot"/> CAE generado</div>
      <div style={{
        position:'absolute', inset:'56px 30px', display:'flex', flexDirection:'column', gap:14
      }}>
        <div style={{
          background:'rgba(244,239,230,.08)', border:'1px solid rgba(244,239,230,.14)',
          borderRadius:14, padding:18, color:'#F4EFE6', fontSize:13
        }}>
          <div style={{display:'flex', justifyContent:'space-between', opacity:.65, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>
            <span>Comprobante</span><span>00001-00000128</span>
          </div>
          <div style={{fontSize:20, marginTop:8, letterSpacing:'-0.02em'}}>Factura A</div>
          <div style={{marginTop:14, opacity:.6, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Receptor</div>
          <div style={{marginTop:4}}>Lácteos del Sur S.A.</div>
          <div style={{opacity:.55, marginTop:2, fontSize:12}}>CUIT 30-71234567-8 · RI</div>
          <div style={{marginTop:18, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
            <div>
              <div style={{opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Neto</div>
              <div style={{fontSize:14, marginTop:4, fontFamily:'var(--font-mono)'}}>$ 69.628,10</div>
            </div>
            <div>
              <div style={{opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>IVA 21%</div>
              <div style={{fontSize:14, marginTop:4, fontFamily:'var(--font-mono)'}}>$ 14.621,90</div>
            </div>
          </div>
          <div style={{marginTop:14, paddingTop:14, borderTop:'1px solid rgba(244,239,230,.10)', display:'flex', justifyContent:'space-between'}}>
            <span style={{opacity:.55, fontSize:11.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Total</span>
            <span style={{fontSize:22, letterSpacing:'-.02em'}}>$ 84.250,00</span>
          </div>
        </div>
        <div style={{
          background:'rgba(244,239,230,.06)', border:'1px solid rgba(244,239,230,.12)',
          borderRadius:14, padding:14, color:'#F4EFE6', fontSize:12.5,
          display:'flex', justifyContent:'space-between', alignItems:'center'
        }}>
          <span style={{display:'inline-flex', gap:8, alignItems:'center'}}>
            <span style={{width:8,height:8,borderRadius:'50%',background:'#9BB369', boxShadow:'0 0 0 4px rgba(155,179,105,.25)'}}/>
            CAE asignado
          </span>
          <span style={{fontFamily:'var(--font-mono)', opacity:.7, fontSize:12}}>70123 4567 8901 2</span>
        </div>
        <div style={{
          background:'rgba(244,239,230,.04)', border:'1px solid rgba(244,239,230,.10)',
          borderRadius:14, padding:14, color:'rgba(244,239,230,.7)', fontSize:11.5
        }}>
          <span style={{display:'inline-flex', gap:8, alignItems:'center'}}>
            <IconChat size={14}/> PDF enviado a contacto@lacteossur.com.ar
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroBI() {
  // simple line + bars
  const bars = [38, 52, 44, 61, 49, 72, 58, 80, 64, 76, 88, 95];
  const max = Math.max(...bars);
  return (
    <div className="hero__visual hero__visual--video" style={{aspectRatio:'4/5'}}>
      <div className="hero__visual-tag"><span className="dot"/> Asesor IA · activo</div>
      <div style={{position:'absolute', inset:'56px 28px', display:'flex', flexDirection:'column', gap:14}}>
        <div style={{display:'flex', gap:10}}>
          <div style={{
            flex:1, background:'rgba(244,239,230,.08)', border:'1px solid rgba(244,239,230,.12)',
            borderRadius:14, padding:'14px 16px', color:'#F4EFE6'
          }}>
            <div style={{fontSize:10.5, opacity:.55, letterSpacing:'.05em', textTransform:'uppercase'}}>Margen bruto</div>
            <div style={{fontSize:24, marginTop:6, letterSpacing:'-.02em'}}>42,8%</div>
            <div style={{fontSize:11, color:'#9BB369', marginTop:4}}>+3,2 pp · vs mes anterior</div>
          </div>
          <div style={{
            flex:1, background:'rgba(244,239,230,.08)', border:'1px solid rgba(244,239,230,.12)',
            borderRadius:14, padding:'14px 16px', color:'#F4EFE6'
          }}>
            <div style={{fontSize:10.5, opacity:.55, letterSpacing:'.05em', textTransform:'uppercase'}}>CMV</div>
            <div style={{fontSize:24, marginTop:6, letterSpacing:'-.02em'}}>57,2%</div>
            <div style={{fontSize:11, color:'#E37449', marginTop:4}}>Objetivo ≤ 70%</div>
          </div>
        </div>
        <div style={{
          background:'rgba(244,239,230,.06)', border:'1px solid rgba(244,239,230,.12)',
          borderRadius:14, padding:16, color:'#F4EFE6', flex:1,
          display:'flex', flexDirection:'column'
        }}>
          <div style={{display:'flex', justifyContent:'space-between', opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>
            <span>Ventas mensuales</span><span>2026</span>
          </div>
          <div style={{display:'flex', alignItems:'flex-end', gap:6, marginTop:18, flex:1, minHeight:90}}>
            {bars.map((v, i) => (
              <div key={i} style={{
                flex:1, height: (v/max*100)+'%',
                background: i === bars.length-1 ? '#E37449' : 'rgba(244,239,230,.4)',
                borderRadius:'4px 4px 0 0'
              }}/>
            ))}
          </div>
          <div style={{display:'flex', justifyContent:'space-between', opacity:.5, fontSize:10, marginTop:8, fontFamily:'var(--font-mono)'}}>
            <span>ENE</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
          </div>
        </div>
        <div style={{
          background:'rgba(195,113,73,.10)', border:'1px solid rgba(227,116,73,.3)',
          borderRadius:14, padding:14, color:'#F4EFE6', fontSize:13, display:'flex', gap:12
        }}>
          <span style={{
            width:28, height:28, borderRadius:'50%', background:'#E37449',
            display:'grid', placeItems:'center', flexShrink:0, color:'#1A1A1A'
          }}>
            <IconSparkle size={14}/>
          </span>
          <div>
            <div style={{fontWeight:500}}>Asesor IA — sugerencia</div>
            <div style={{opacity:.75, marginTop:2, fontSize:12, lineHeight:1.4}}>
              Renegociá con tu proveedor top (32% del CMV) antes del 30/06. Podrías recuperar ~4 pp de margen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroRetail() {
  return (
    <div className="hero__visual hero__visual--video" style={{aspectRatio:'4/5', background:'linear-gradient(160deg, #1A1A1A 0%, #0E0F0C 100%)'}}>
      <div className="hero__visual-tag"><span className="dot"/> Caja 1 · Abierta</div>
      <div style={{position:'absolute', inset:'56px 26px', display:'flex', flexDirection:'column', gap:12}}>
        <div style={{
          background:'rgba(244,239,230,.06)', border:'1px solid rgba(244,239,230,.12)',
          borderRadius:14, padding:14, color:'#F4EFE6', fontSize:13
        }}>
          <div style={{display:'flex', justifyContent:'space-between', opacity:.5, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>
            <span>Ticket #00428</span><span>14:32</span>
          </div>
          <div style={{marginTop:12, display:'flex', flexDirection:'column', gap:8}}>
            {[
              ['Remera básica · M', 2, 18900],
              ['Pantalón cargo · 42', 1, 32400],
              ['Cinturón cuero', 1, 9800],
            ].map((it, i) => (
              <div key={i} style={{display:'flex', justifyContent:'space-between', fontSize:12.5}}>
                <span><span style={{opacity:.6, marginRight:8}}>×{it[1]}</span>{it[0]}</span>
                <span style={{fontFamily:'var(--font-mono)'}}>${it[2].toLocaleString('es-AR')}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:14, paddingTop:14, borderTop:'1px solid rgba(244,239,230,.1)', display:'flex', justifyContent:'space-between'}}>
            <span style={{opacity:.55, fontSize:11, letterSpacing:'.05em', textTransform:'uppercase'}}>Total</span>
            <span style={{fontSize:22, letterSpacing:'-.02em'}}>$ 80.000</span>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
          {[
            {label:'MODO QR', sub:'Interoperable', active:true},
            {label:'Mercado Pago', sub:'QR · 3/6 cuotas'},
            {label:'Tarjeta', sub:'12 cuotas s/interés'},
            {label:'Efectivo', sub:''},
          ].map((m, i) => (
            <div key={i} style={{
              padding:'10px 12px',
              borderRadius:12,
              background: m.active ? '#E37449' : 'rgba(244,239,230,.06)',
              border: m.active ? '1px solid #E37449' : '1px solid rgba(244,239,230,.12)',
              color: m.active ? '#1A1A1A' : '#F4EFE6',
              fontSize:12.5
            }}>
              <div style={{fontWeight:500}}>{m.label}</div>
              <div style={{opacity:.75, fontSize:10.5, marginTop:2}}>{m.sub}</div>
            </div>
          ))}
        </div>
        <div style={{
          background:'rgba(155,179,105,.10)', border:'1px solid rgba(155,179,105,.30)',
          borderRadius:14, padding:14, color:'#F4EFE6', fontSize:13,
          display:'flex', justifyContent:'space-between', alignItems:'center'
        }}>
          <span style={{display:'inline-flex', gap:8, alignItems:'center'}}>
            <span style={{width:8,height:8,borderRadius:'50%',background:'#9BB369', boxShadow:'0 0 0 4px rgba(155,179,105,.25)'}}/>
            Cliente · Camila R. · Gold
          </span>
          <span style={{fontSize:11.5, opacity:.7}}>+800 pts</span>
        </div>
      </div>
    </div>
  );
}

function HeroAgro() {
  return (
    <div className="hero__visual hero__visual--video" style={{aspectRatio:'4/5', background:'linear-gradient(160deg, #3F5142 0%, #1F2820 100%)'}}>
      <div className="hero__visual-tag"><span className="dot"/> Offline · sincronizando</div>
      <div style={{position:'absolute', inset:'56px 26px', display:'flex', flexDirection:'column', gap:12}}>
        <div style={{
          background:'rgba(244,239,230,.06)', border:'1px solid rgba(244,239,230,.12)',
          borderRadius:14, padding:16, color:'#F4EFE6'
        }}>
          <div style={{display:'flex', justifyContent:'space-between', opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>
            <span>Lote 7 · La Esperanza</span><span>148 ha</span>
          </div>
          <div style={{fontSize:18, marginTop:8, letterSpacing:'-.01em'}}>Soja · campaña 25/26</div>
          <div style={{marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
            <div>
              <div style={{opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Costo / ha</div>
              <div style={{fontSize:18, marginTop:4, letterSpacing:'-.01em'}}>US$ 432</div>
            </div>
            <div>
              <div style={{opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Margen bruto</div>
              <div style={{fontSize:18, marginTop:4, color:'#9BB369', letterSpacing:'-.01em'}}>US$ 218</div>
            </div>
          </div>
        </div>
        <div style={{
          background:'rgba(244,239,230,.06)', border:'1px solid rgba(244,239,230,.12)',
          borderRadius:14, padding:14, color:'#F4EFE6', fontSize:13
        }}>
          <div style={{opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Hacienda · Rodeo Cría</div>
          <div style={{display:'flex', gap:14, marginTop:10}}>
            {[
              ['Vacas', 482],
              ['Vaq.', 96],
              ['Ternr.', 271],
              ['Toros', 18],
            ].map((it, i) => (
              <div key={i} style={{flex:1}}>
                <div style={{fontSize:11, opacity:.7}}>{it[0]}</div>
                <div style={{fontSize:18, marginTop:2, letterSpacing:'-.02em'}}>{it[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          background:'rgba(244,239,230,.04)', border:'1px solid rgba(244,239,230,.10)',
          borderRadius:14, padding:14, color:'#F4EFE6', fontSize:12.5,
          display:'flex', flexDirection:'column', gap:8, flex:1
        }}>
          <div style={{opacity:.55, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Lluvias últimos 30 días</div>
          <svg viewBox="0 0 200 60" style={{width:'100%', height:60}}>
            <path d="M0 50 L20 48 L40 40 L60 45 L80 30 L100 35 L120 20 L140 28 L160 15 L180 25 L200 18"
              fill="none" stroke="#9BB369" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <div style={{display:'flex', justifyContent:'space-between', fontSize:11, opacity:.6}}>
            <span>Acum. 128mm</span>
            <span style={{color:'#9BB369'}}>+38mm vs prom.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// — Product data ————————————————————————————————————————

const PRODUCTS = {
  'factura-facil': {
    slug: 'factura-facil',
    name: 'FacturaFácil',
    eyebrow: 'Producto · Facturación',
    status: { kind: 'live', text: 'Disponible' },
    HeroVisual: HeroFactura,
    title: <>Facturá con CAE real <em>en segundos.</em></>,
    sub: 'Conectado con ARCA en serio. Monotributo y Responsable Inscripto, deuda CCMA en vivo, facturación masiva desde Mercado Pago y módulo de impuestos con forecast.',
    meta: [
      { label: 'Tiempo a primera factura', value: '< 2 min' },
      { label: 'Tipos de comprobante', value: 'A · B · C · M' },
      { label: 'Plan mínimo', value: 'Starter' },
    ],
    features: [
      { icon: <IconShield/>, title: <>CAE <em>real</em>, no simulado</>,
        desc: 'Conexión directa con los servidores de ARCA via wsfe v1. Factura A, B, C, M y MiPyME. Si ARCA está caída, guardamos como borrador y reintentamos.' },
      { icon: <IconUsers/>, title: 'Monotributo y Responsable Inscripto',
        desc: 'Soporte completo para ambos regímenes. Si cambiás de categoría, cambia el tipo de facturación con un click — no migrás de sistema.' },
      { icon: <IconSearch/>, title: 'Padrón A4 con autocompletado',
        desc: 'Ingresás un CUIT y traemos razón social, condición frente al IVA y domicilio fiscal en tiempo real. También DNI vía constancia de inscripción.' },
      { icon: <IconCard/>, title: 'Facturación masiva desde Mercado Pago',
        desc: 'Importás tus cobros de MP, los clasificás por origen (link, QR, transferencia) y emitís comprobantes en lote con un click. Sin tipear nada.' },
      { icon: <IconChart/>, title: <>Módulo de <em>impuestos</em> con forecast</>,
        desc: 'Resumen mensual, presión fiscal, IIBB local y convenio multilateral, forecast a 3 meses y simulador con sliders de impacto. Premium.' },
      { icon: <IconBolt/>, title: <>Deuda <em>CCMA</em> en tiempo real</>,
        desc: 'Consulta directa a ARCA via AfipSDK. Desglose por concepto (Mono 020, Autónomos 021, OS 024), intereses, períodos expandibles. Badge de alerta cuando hay deuda.' },
      { icon: <IconFactura/>, title: 'PDF con QR verificable',
        desc: 'Comprobante con código QR que el receptor escanea y verifica en ARCA. Envío automático por email vía Resend, con tu dominio configurable.' },
      { icon: <IconBook/>, title: 'Reportes y exportación CSV',
        desc: 'Filtrás por fecha, tipo y receptor. Exportás al formato que pide tu contador, banco o sistema externo. Compatible Tango, Bejerman, Excel.' },
    ],
    extra: {
      title: <>Lo que tu <em>contador</em> ya está pidiendo.</>,
      items: [
        'Login con CUIT + clave fiscal · JWT 24hs',
        'Punto de venta RCEL · Concepto 1/2/3',
        'Receptor Consumidor Final / CUIT / DNI',
        'Comprobantes recibidos (wscdc) con IVA crédito',
        'Carga de compras manuales para RI',
        'Histórico completo de comprobantes',
        'Notas de crédito y débito asociadas',
        'Listados desde Supabase, filtros por todo',
        'Panel admin con wizard de alta de clientes',
        'Multi-cliente · plan basic / premium por CUIT',
        'Token MP por cliente, totalmente aislado',
        'Resend para emails con tu dominio',
      ]
    },
    integrations: ['ARCA / AFIP', 'Mercado Pago', 'AfipSDK', 'Padrón A4', 'Resend', 'Google Drive'],
    plan: { name: 'Pro', price: 29, period: '/mes USD', desc: 'FacturaFácil ilimitado + módulo de impuestos + asesor IA básico.' },
    faqs: [
      { q: '¿El CAE es real o simulado?', a: 'Real. Conexión directa con los servidores de ARCA. El comprobante es válido como factura electrónica y queda registrado en tu CUIT.' },
      { q: '¿Qué pasa si ARCA se cae?', a: 'Guardamos la factura como borrador y reintentamos automáticamente cada 60 segundos. Cuando ARCA vuelve, asigna CAE sin que hagas nada.' },
      { q: '¿Sirve para monotributistas?', a: 'Sí, desde el plan Starter. Emitís factura C ilimitada. Cuando pasás a RI, cambiás el régimen con un click y empezás a facturar A y B.' },
      { q: '¿Puedo emitir facturas desde el celular?', a: 'Sí, la interfaz es responsive. Funciona desde el mostrador, la oficina o en movimiento.' },
    ],
  },

  'dashboard-bi': {
    slug: 'dashboard-bi',
    name: 'Dashboard BI',
    eyebrow: 'Producto · Business Intelligence',
    status: { kind: 'live', text: 'Disponible' },
    HeroVisual: HeroBI,
    title: <>Datos que <em>te avisan</em> antes que el problema crezca.</>,
    sub: 'Visibilidad financiera en tiempo real con un asesor IA que conoce tu negocio. Ventas, CMV, márgenes, proveedores y forecast — sin pedirle al contador cada mes.',
    meta: [
      { label: 'Frecuencia de actualización', value: 'Tiempo real' },
      { label: 'Asesor IA', value: 'Claude · Sonnet' },
      { label: 'Plan mínimo', value: 'Pro' },
    ],
    features: [
      { icon: <IconChart/>, title: <>Overview <em>ejecutivo</em></>,
        desc: 'KPIs de ventas, CMV, margen bruto y resultado neto en un solo panel. Vista diaria, mensual y anual. Comparativa con período anterior.' },
      { icon: <IconSparkle/>, title: 'Asesor IA estratégico',
        desc: 'Agente con contexto real de tu negocio. Recomendaciones accionables en español argentino —no respuestas genéricas tipo "diversifique sus ingresos".' },
      { icon: <IconUsers/>, title: 'Análisis de proveedores',
        desc: 'Concentración, curva de Pareto y mapa de riesgo. Sabés a quién negociarle y cuánto podés ahorrar. Identifica el 20% que te genera el 80% del costo.' },
      { icon: <IconBolt/>, title: 'Simulador break-even',
        desc: 'Calculás el punto de equilibrio y simulás escenarios de ventas, CMV y gastos con sliders interactivos. Ves el impacto en margen y resultado neto en vivo.' },
      { icon: <IconClock/>, title: <>Forecast <em>fiscal</em> a 3 meses</>,
        desc: 'Proyectamos tu carga impositiva, monotributo, IIBB y autónomos. Te avisa si te acercás al tope de categoría antes de cruzarlo.' },
      { icon: <IconPlug/>, title: 'Sync con Google Drive',
        desc: 'Actualizás tu planilla .xlsx en Drive y el dashboard refleja los cambios sin hacer nada más. Lecto-escritura bidireccional opcional.' },
      { icon: <IconShield/>, title: 'Super Admin con PIN',
        desc: 'Acceso estratégico protegido con PIN. Analytics completo + asesor IA para decisiones de largo plazo —separado del operativo del día a día.' },
      { icon: <IconArrowUpRight/>, title: 'Alertas automáticas',
        desc: 'CMV alto, margen negativo, monotributo cerca del tope, proveedor que se cae. Te avisamos por email y en la app antes de que sea tarde.' },
    ],
    extra: {
      title: <>Caso real <em>oct-25 a feb-26.</em></>,
      items: [
        'CMV detectado: 84,5% (objetivo ≤70%) → alerta crítica',
        'Resultado neto: −$9,4M → recomendación IA generada',
        'Monotributo Cat. H: 92% del tope → alerta de cambio de régimen',
        'Top 3 proveedores concentran 71% del costo total',
        'IIBB CABA + PBA + SantaFe distribuído por convenio',
        '5 escenarios simulados, 1 implementado, +14% margen',
      ]
    },
    integrations: ['Google Drive', 'Claude (Anthropic)', 'ARCA / AFIP', 'Mercado Pago', 'Resend'],
    plan: { name: 'Pro', price: 29, period: '/mes USD', desc: 'Dashboard completo + asesor IA + módulo de impuestos + sync Google Drive.' },
    faqs: [
      { q: '¿Cómo aprende la IA mi negocio?', a: 'Conectamos tus fuentes de datos (planilla en Drive, facturación, MP) y la IA tiene contexto completo del histórico. Las recomendaciones se basan en tus números reales, no en plantillas genéricas.' },
      { q: '¿Mis datos van a entrenar modelos públicos?', a: 'No. Usamos la API de Anthropic con flag de no entrenamiento. Tus datos no se usan para entrenar modelos ni se mezclan con datos de otros clientes.' },
      { q: '¿Funciona con Excel local sin Drive?', a: 'Sí, podés cargar manualmente. Pero la sync con Drive te evita tener que recargar cada vez que actualizás la planilla.' },
      { q: '¿Cuánto histórico cargás?', a: 'Recomendamos al menos 6 meses para que el asesor tenga base. Migración asistida hasta 24 meses sin costo.' },
    ],
  },

  'retail': {
    slug: 'retail',
    name: 'Retail',
    eyebrow: 'Producto · POS + Retail OS',
    status: { kind: 'beta', text: 'Beta · Q3 2026' },
    HeroVisual: HeroRetail,
    title: <>El sistema que <em>se siente</em> como tu mostrador.</>,
    sub: 'POS + stock + clientes + backoffice ERP para comercios y gastronomía. MODO, Mercado Pago, cuotas sin interés, fidelización y multi-sucursal. Sin hardware especial — corre en cualquier tablet o PC.',
    meta: [
      { label: 'Hardware necesario', value: 'Tablet o PC' },
      { label: 'Medios de pago', value: '9 integrados' },
      { label: 'Plan mínimo', value: 'Business' },
    ],
    features: [
      { icon: <IconCard/>, title: <>POS en <em>tablet</em> o PC</>,
        desc: 'Sin hardware especial ni licencias. Cualquier dispositivo con navegador. Interfaz tipo Erply Berlin, full español, optimizada para tablet en landscape.' },
      { icon: <IconBolt/>, title: <>9 medios de pago <em>argentinos</em></>,
        desc: 'MODO QR (interoperable), Mercado Pago, Google Pay, Tarjeta en cuotas (Galicia, Santander, BBVA, Naranja X, HSBC), Transferencia 3.0, Ualá, Rapipago, PagoFácil, Efectivo.' },
      { icon: <IconBox/>, title: 'Inventario en tiempo real',
        desc: 'Multi-depósito, variantes, código de barras (USB o cámara), alertas de mínimos, transferencias entre sucursales. Importación desde Excel con detección de duplicados.' },
      { icon: <IconUsers/>, title: 'CRM + fidelización',
        desc: 'Clientes con grupos (VIP, Mayorista, Retail), saldo a favor, puntos de lealtad, historial de compras. Sin tarjetas físicas — DNI o teléfono.' },
      { icon: <IconChart/>, title: 'Dashboard con KPIs',
        desc: 'Total órdenes, ticket promedio, tasa de retención, ganancia neta, AOV, top 5 productos, breakdown por medio de pago. Gráficos interactivos.' },
      { icon: <IconFactura/>, title: <>Facturación <em>ARCA</em> integrada</>,
        desc: 'Cada venta puede generar su factura automáticamente. Sin doble carga ni errores de sincronización. Usa FacturaFácil internamente.' },
      { icon: <IconClock/>, title: 'Fichaje y cajas',
        desc: 'Empleados con roles (Admin, Gerente, Cajero, Depósito, Repositor). Clock in/out con PIN. Multi-caja por sucursal, X-Report y cierre del día.' },
      { icon: <IconBook/>, title: 'Backoffice completo',
        desc: '29 secciones · 37 modales · Libro IVA, plan de cuentas, asientos contables, exportación a Tango, Bejerman, QuickBooks, Xero, ARCA.' },
    ],
    extra: {
      title: <>Pensado para <em>comercios reales.</em></>,
      items: [
        'Vista cliente (customer-facing display)',
        'Cuotas sin interés por banco con TNA',
        'Devoluciones (mismo medio / store credit / efectivo)',
        'Apartados y pedidos para retiro',
        'Cupones, gift cards, promociones 2×1',
        'Listas de precios (Mayorista, VIP, Promo)',
        'Pago combinado (efectivo + tarjeta)',
        'Notas y comanda para gastronomía',
        'Bilingüe ES / EN (toggle global)',
        'API REST · webhooks para integraciones',
        'Multi-tienda · cadena retail',
        'Modo oscuro · pantalla bloqueada',
      ]
    },
    integrations: ['MODO', 'Mercado Pago', 'Google Pay', 'Naranja X', 'Ualá', 'Rapipago', 'BCRA Transf. 3.0', 'ARCA'],
    plan: { name: 'Business', price: 79, period: '/mes USD', desc: 'Retail + multi-sucursal + onboarding dedicado + API REST.' },
    faqs: [
      { q: '¿Qué hardware necesito?', a: 'Una tablet Android/iPad o cualquier PC con navegador moderno. Opcional: lector de código de barras USB o por Bluetooth, impresora térmica de tickets, cajón portamonedas.' },
      { q: '¿Sirve para gastronomía?', a: 'Sí. Tiene comanda para cocina, control de mesas, delivery y combos. Soportamos cafetería, restaurante, panadería, rotisería.' },
      { q: '¿Funciona offline?', a: 'Modo offline limitado: podés seguir vendiendo en caja, los tickets se sincronizan cuando vuelve la conexión. Para emisión de CAE necesita internet (lo guarda como borrador).' },
      { q: '¿Cuántas cajas puedo abrir simultáneas?', a: 'Sin límite en plan Business. Cada caja tiene su empleado activo y su balance independiente.' },
    ],
  },

  'agropecuario': {
    slug: 'agropecuario',
    name: 'Agropecuario',
    eyebrow: 'Producto · AgTech',
    status: { kind: 'beta', text: 'Beta · Q3 2026' },
    HeroVisual: HeroAgro,
    title: <>El campo merece más que una <em>planilla.</em></>,
    sub: 'Gestión integral para el productor moderno. Hacienda, cultivos, costos por hectárea, lluvias, contratistas y liquidaciones —con modo offline para usar arriba de la cosechadora.',
    meta: [
      { label: 'Modo offline', value: 'Disponible' },
      { label: 'SENASA DT-e', value: 'Integrado' },
      { label: 'Plan mínimo', value: 'Business' },
    ],
    features: [
      { icon: <IconBox/>, title: <>Lotes y <em>potreros</em></>,
        desc: 'Registro de siembra, labores, aplicaciones y cosecha por lote. Historial completo de cada potrero — qué se hizo, cuándo, con qué insumo y por quién.' },
      { icon: <IconUsers/>, title: 'Hacienda completa',
        desc: 'Animales, categorías, movimientos, sanidad, pesadas. Trazabilidad por animal o tropa. Generación de DT-e (Documentos de Tránsito electrónicos) SENASA.' },
      { icon: <IconChart/>, title: <>Costo real <em>por ha/cabeza</em></>,
        desc: 'Costo total por actividad, campaña y período. Margen bruto agrícola y ganadero calculado automáticamente. Comparativa entre campañas.' },
      { icon: <IconGlobe/>, title: 'Registro climático',
        desc: 'Lluvias, heladas, condiciones por lote. Historial para correlacionar con rendimientos. Acumulados y comparativa contra promedio histórico.' },
      { icon: <IconBook/>, title: 'Liquidaciones',
        desc: 'Generación y registro de liquidaciones de granos y hacienda en formato corredor y frigorífico. Importación desde PDFs y conciliación automática.' },
      { icon: <IconBolt/>, title: <><em>Offline</em> para el campo</>,
        desc: 'Registrás sin conexión desde celular o tablet. Sincroniza automáticamente al recuperar señal. Pensado para sectores sin cobertura.' },
      { icon: <IconCard/>, title: 'Contratistas',
        desc: 'Contratos de labor, cosecha y flete. Control de deuda y pagos. Tarifas por tipo de labor, hectárea o tonelada.' },
      { icon: <IconFactura/>, title: 'Integración con ARCA',
        desc: 'Generás facturas de venta de granos o hacienda directamente desde el sistema. Sin pasar por otro programa ni planillas intermedias.' },
    ],
    extra: {
      title: <>Cumplimiento <em>normativo.</em></>,
      items: [
        'SENASA DT-e (Documentos de Tránsito electrónicos)',
        'RENSPA por establecimiento',
        'Trazabilidad completa por animal',
        'Formato corredor de granos (Cámara Arbitral)',
        'Formato frigorífico para liquidación de hacienda',
        'Generación de remitos R-1 y R-2',
        'Boleto de marca y señal',
        'Inventario físico al 31/12 de cada año',
      ]
    },
    integrations: ['ARCA / AFIP', 'SENASA DT-e', 'Google Drive', 'API REST'],
    plan: { name: 'Business', price: 79, period: '/mes USD', desc: 'Agropecuario + onboarding dedicado + API REST + multi-establecimiento.' },
    faqs: [
      { q: '¿Funciona sin internet?', a: 'Sí, modo offline completo en celular y tablet. Registrás siembras, labores, pesadas y movimientos sin conexión, y cuando volvés al pueblo o la casa, sincroniza automático.' },
      { q: '¿Soportan SENASA DT-e?', a: 'Sí. Generamos DT-e directamente desde el sistema con tu RENSPA y firma electrónica. Sin tener que entrar a la web de SENASA.' },
      { q: '¿Sirve para mixto agrícola + ganadero?', a: 'Sí, es el caso más común. Los costos se asignan por actividad y los reportes salen separados o consolidados, como prefieras.' },
      { q: '¿Importa datos de mi planilla actual?', a: 'Sí, te ayudamos a migrar desde Excel, Megagro, AgroCRM o cualquier otro sistema. La migración asistida está incluida con plan Business.' },
    ],
  },
};

// — Reusable page sections ——————————————————————————————————————

function ProductHero({ data }) {
  const Visual = data.HeroVisual;
  const statusCls = data.status.kind === 'live' ? 'prod-badge--live' : data.status.kind === 'beta' ? 'prod-badge--beta' : 'prod-badge--soon';
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div>
          <div className="prod-eyebrow-row">
            <span className="eyebrow">{data.eyebrow}</span>
            <span className={"prod-badge " + statusCls}>{data.status.text}</span>
          </div>
          <h1 className="hero__title">{data.title}</h1>
          <p className="hero__sub">{data.sub}</p>
          <div className="hero__ctas">
            <a href="/#contacto" className="btn btn--primary">Probar gratis <IconArrowRight size={16}/></a>
            <a href="/#contacto" className="btn btn--ghost"><IconChat size={14}/> Hablar con ventas</a>
          </div>
          <div className="prod-hero-meta">
            {data.meta.map((m, i) => (
              <div key={i} className="prod-hero-meta-item">
                {m.label}
                <strong>{m.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Visual/>
        </div>
      </div>
    </section>
  );
}

function ProductFeatures({ data }) {
  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Funcionalidades</span>
          <h2 className="section-title">
            Todo lo que <em>hace</em> {data.name}.
          </h2>
        </div>
        <div className="feat-grid reveal">
          {data.features.map((f, i) => (
            <div key={i} className="feat">
              <div className="feat__icon">{f.icon}</div>
              <h3 className="feat__title">{f.title}</h3>
              <p className="feat__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductExtra({ data }) {
  if (!data.extra) return null;
  return (
    <section style={{paddingTop:0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Detalle</span>
          <h2 className="section-title">{data.extra.title}</h2>
        </div>
        <ul className="feat-list reveal">
          {data.extra.items.map((it, i) => (
            <li key={i}><IconCheck size={16}/> <span>{it}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductIntegrations({ data }) {
  return (
    <section style={{paddingTop:0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Integraciones</span>
          <h2 className="section-title">
            Enchufado a lo que <em>ya usás.</em>
          </h2>
        </div>
        <div className="int-strip reveal">
          {data.integrations.map((i, k) => (
            <span key={k} className="int-pill">
              <span className="int-pill__mark"/> {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPlan({ data }) {
  return (
    <section>
      <div className="container">
        <div className="plan-callout reveal">
          <div>
            <span className="eyebrow">Plan</span>
            <h2 className="plan-callout__title">
              Incluido en el plan <em>{data.plan.name}.</em>
            </h2>
            <p style={{color:'rgba(244,239,230,.7)', marginTop:18, maxWidth:'42ch', fontSize:16}}>
              {data.plan.desc}
            </p>
            <div style={{display:'flex', gap:12, marginTop:24, flexWrap:'wrap'}}>
              <a href="/#precios" className="btn" style={{background:'var(--bg)', color:'var(--ink)'}}>Ver todos los planes <IconArrowRight size={16}/></a>
              <a href="/#contacto" className="btn btn--ghost" style={{color:'var(--bg)', borderColor:'rgba(244,239,230,.3)'}}>
                <IconChat size={14}/> Empresas
              </a>
            </div>
          </div>
          <div className="plan-callout__price">
            <span className="eyebrow" style={{alignSelf:'flex-end'}}>desde</span>
            <span className="plan-callout__price-num">USD ${data.plan.price}</span>
            <span className="plan-callout__price-period">{data.plan.period} · facturado anual</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFAQ({ data }) {
  const [open, setOpen] = useStateProd(0);
  return (
    <section>
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-title">Lo que la gente <em>nos pregunta.</em></h2>
        </div>
        <div className="faq reveal">
          {data.faqs.map((f, i) => {
            const isOpen = i === open;
            return (
              <div key={i} className={"faq__item" + (isOpen ? ' open' : '')}>
                <button className="faq__btn" onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq__toggle"><IconPlus size={14}/></span>
                </button>
                <div className="faq__panel" style={{maxHeight: isOpen ? 240 : 0}}>
                  <p className="faq__answer">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCrossSell({ currentSlug }) {
  const others = Object.values(PRODUCTS).filter(p => p.slug !== currentSlug);
  const iconFor = (s) => s === 'factura-facil' ? <IconFactura/> : s === 'dashboard-bi' ? <IconChart/> : s === 'retail' ? <IconCard/> : <IconBox/>;
  return (
    <section style={{paddingTop:0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Más productos</span>
          <h2 className="section-title">
            El resto de la <em>suite.</em>
          </h2>
        </div>
        <div className="cross reveal">
          {others.map((p) => (
            <a key={p.slug} href={p.slug + '.html'} className="cross__card">
              <div className="cross__card-icon">{iconFor(p.slug)}</div>
              <h3 className="cross__card-name">{p.name}</h3>
              <p className="cross__card-desc">{p.sub.split('.')[0] + '.'}</p>
              <span className="cross__card-link">Ver detalle <IconArrowUpRight size={14}/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPage({ slug }) {
  const data = PRODUCTS[slug];
  const [scrolled, setScrolled] = useStateProd(false);
  const [menuOpen, setMenuOpen] = useStateProd(false);
  useReveal();
  useEffectProd(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffectProd(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Override Nav logo+links to point back to home
  return (
    <React.Fragment>
      <Nav onOpenMenu={() => setMenuOpen(true)} scrolled={scrolled}/>
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}/>
      <main>
        <ProductHero data={data}/>
        <ProductFeatures data={data}/>
        <ProductExtra data={data}/>
        <ProductIntegrations data={data}/>
        <ProductPlan data={data}/>
        <ProductFAQ data={data}/>
        <ProductCrossSell currentSlug={slug}/>
        <Closing/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

// Fix Nav links so they point back home from product pages
// (existing Nav uses # anchors which won't work cross-page; we patch by
//  making the logo a real href to / )
window.mountProductPage = function(slug) {
  ReactDOM.createRoot(document.getElementById('root')).render(<ProductPage slug={slug}/>);
};
