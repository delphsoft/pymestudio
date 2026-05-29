// === Nav + Drawer =========================================================
const { useState, useEffect, useRef } = React;

function Nav({ onOpenMenu, scrolled }) {
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav__inner">
        <a href="index.html" className="nav__logo">
          <span className="nav__logo-mark"><SumaLogo size={28}/></span>
          <span>PymeStudio</span>
        </a>
        <nav className="nav__links">
          <div className="nav__item">
            <a href="index.html#productos">Productos ▾</a>
            <div className="nav__dropdown">
              <a className="nav__dropdown-item" href="factura-facil.html">
                <span className="nav__dropdown-icon"><IconFactura size={18}/></span>
                <span>
                  <div className="nav__dropdown-title">FacturaFácil</div>
                  <div className="nav__dropdown-desc">Facturación ARCA con CAE real · Mono y RI</div>
                </span>
              </a>
              <a className="nav__dropdown-item" href="dashboard-bi.html">
                <span className="nav__dropdown-icon"><IconChart size={18}/></span>
                <span>
                  <div className="nav__dropdown-title">Dashboard BI</div>
                  <div className="nav__dropdown-desc">Visibilidad financiera + asesor IA</div>
                </span>
              </a>
              <a className="nav__dropdown-item" href="retail.html">
                <span className="nav__dropdown-icon"><IconCard size={18}/></span>
                <span>
                  <div className="nav__dropdown-title">Retail</div>
                  <div className="nav__dropdown-desc">POS + retail + stock para comercios</div>
                </span>
              </a>
              <a className="nav__dropdown-item" href="agropecuario.html">
                <span className="nav__dropdown-icon"><IconBox size={18}/></span>
                <span>
                  <div className="nav__dropdown-title">Agropecuario</div>
                  <div className="nav__dropdown-desc">Gestión de campo, hacienda y costos</div>
                </span>
              </a>
            </div>
          </div>
          <a href="index.html#como-funciona">Cómo funciona</a>
          <a href="index.html#servicios">Servicios</a>
          <a href="index.html#precios">Precios</a>
          <a href="index.html#recursos">Recursos</a>
          <a href="index.html#contacto">Soporte</a>
        </nav>
        <div className="nav__cta">
          <a href="#" className="btn btn--ghost">Ingresar</a>
          <a href="index.html#contacto" className="btn btn--primary">
            Probar gratis <IconArrowRight size={16} />
          </a>
          <button className="nav__menu-btn" aria-label="Abrir menú" onClick={onOpenMenu}>
            <IconMenu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Drawer({ open, onClose }) {
  return (
    <div className={"drawer" + (open ? " open" : "")}>
      <div className="container" style={{display:'flex', flexDirection:'column', flex:1}}>
        <div className="drawer__head">
          <a href="index.html" className="nav__logo">
            <span className="nav__logo-mark"><SumaLogo size={28}/></span>
            <span>PymeStudio</span>
          </a>
          <button className="nav__menu-btn" style={{display:'inline-flex'}} onClick={onClose} aria-label="Cerrar menú">
            <IconClose size={20} />
          </button>
        </div>
        <nav className="drawer__links">
          <a onClick={onClose} href="factura-facil.html">FacturaFácil</a>
          <a onClick={onClose} href="dashboard-bi.html">Dashboard BI</a>
          <a onClick={onClose} href="retail.html">Retail</a>
          <a onClick={onClose} href="agropecuario.html">Agropecuario</a>
          <a onClick={onClose} href="index.html#como-funciona">Cómo funciona</a>
          <a onClick={onClose} href="index.html#servicios">Servicios</a>
          <a onClick={onClose} href="index.html#precios">Precios</a>
          <a onClick={onClose} href="index.html#recursos">Recursos</a>
          <a onClick={onClose} href="index.html#contacto">Soporte</a>
        </nav>
        <div className="drawer__cta">
          <a href="#" className="btn btn--ghost" style={{flex:1}}>Ingresar</a>
          <a href="#" className="btn btn--primary" style={{flex:1}}>Probar gratis</a>
        </div>
      </div>
    </div>
  );
}

// === Reveal-on-scroll hook ================================================
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// === Hero variants ========================================================
const AVATARS = [
  "https://i.pravatar.cc/96?img=12",
  "https://i.pravatar.cc/96?img=47",
  "https://i.pravatar.cc/96?img=33",
  "https://i.pravatar.cc/96?img=15",
];

function AvatarStack() {
  return (
    <div className="hero__avatars">
      <div className="hero__avatar-stack">
        {AVATARS.map((src, i) => (
          <div key={i} className="hero__avatar" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      <div>
        <div style={{fontSize:14, fontWeight:500}}>+100 PyMEs activas</div>
        <div style={{fontSize:12.5, color:'var(--muted)'}}>Facturando con ARCA cada día</div>
      </div>
    </div>
  );
}

function HeroSplit() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div>
          <AvatarStack />
          <h1 className="hero__title">
            Gestioná tu PyME <em>con claridad,</em><br/>creciendo sin fricción.
          </h1>
          <p className="hero__sub">
            Facturación ARCA, contabilidad, stock y equipo en una sola plataforma.
            Pensada para empresas argentinas que ya no entran en una planilla.
          </p>
          <div className="hero__ctas">
            <a href="#" className="btn btn--primary">Probar 14 días gratis <IconArrowRight size={16}/></a>
            <a href="#" className="btn btn--ghost">Ver demo en vivo</a>
          </div>
          <div style={{display:'flex', gap:22, marginTop:32, fontSize:13.5, color:'var(--muted)', flexWrap:'wrap'}}>
            <span style={{display:'inline-flex',gap:6,alignItems:'center'}}><IconCheck size={14}/> Sin tarjeta</span>
            <span style={{display:'inline-flex',gap:6,alignItems:'center'}}><IconCheck size={14}/> Migración asistida</span>
            <span style={{display:'inline-flex',gap:6,alignItems:'center'}}><IconCheck size={14}/> Soporte humano en español</span>
          </div>
        </div>
        <div className="hero__visual hero__visual--video">
          <div className="hero__visual-tag"><span className="dot"/> ARCA conectado</div>
          <HeroDashboardLoop />
        </div>
      </div>
    </section>
  );
}

function HeroCenter() {
  return (
    <section className="hero" style={{paddingBottom:0}}>
      <div className="container" style={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <span className="chip" style={{marginBottom:20}}>
          <IconSparkle size={14}/> Nuevo · Facturas en bloque desde Excel
        </span>
        <h1 className="hero__title" style={{maxWidth: '14ch', textAlign:'center'}}>
          La forma <em>seria</em> de gestionar<br/>tu PyME en Argentina.
        </h1>
        <p className="hero__sub" style={{maxWidth: '58ch', marginLeft:'auto', marginRight:'auto'}}>
          Facturación electrónica, contabilidad, stock, cobros y nómina conectados con ARCA, AFIP y Mercado Pago.
          Hecho por contadores y desarrolladores argentinos.
        </p>
        <div className="hero__ctas" style={{justifyContent:'center', marginTop:8}}>
          <a href="#" className="btn btn--primary">Empezar gratis <IconArrowRight size={16}/></a>
          <a href="#" className="btn btn--ghost"><IconPlay size={14}/> Ver tour (2 min)</a>
        </div>
        <div style={{marginTop:48, width:'100%', maxWidth:1000}}>
          <div className="hero__visual hero__visual--video" style={{aspectRatio:'16/9', borderRadius:'var(--radius-xl)'}}>
            <div className="hero__visual-tag"><span className="dot"/> ARCA conectado</div>
            <HeroDashboardLoop wide />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroEditorial() {
  return (
    <section className="hero">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'1fr', gap:0}}>
          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:32, flexWrap:'wrap'}}>
            <AvatarStack />
            <div style={{display:'flex', gap:10}}>
              <a href="#" className="btn btn--ghost">Hablar con ventas</a>
              <a href="#" className="btn btn--primary">Probar gratis <IconArrowRight size={16}/></a>
            </div>
          </div>
          <h1 className="hero__title" style={{fontSize:'clamp(56px,9vw,140px)', margin:'40px 0 0', textAlign:'left'}}>
            Tu PyME,<br/>en <em>orden.</em>
          </h1>
          <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48, marginTop:48, alignItems:'end'}}>
            <div className="hero__visual hero__visual--video" style={{aspectRatio:'16/10', borderRadius:'var(--radius-xl)'}}>
              <div className="hero__visual-tag"><span className="dot"/> Sincronizando</div>
              <HeroDashboardLoop wide />
            </div>
            <div>
              <p className="hero__sub" style={{margin:0}}>
                Una plataforma para facturar con ARCA, llevar la contabilidad,
                controlar stock, cobrar y pagar al equipo —sin moverte de pantalla.
              </p>
              <div style={{display:'flex', gap:12, marginTop:24, flexWrap:'wrap'}}>
                <span className="chip"><IconShield size={14}/> AFIP / ARCA</span>
                <span className="chip"><IconCard size={14}/> Mercado Pago</span>
                <span className="chip"><IconBolt size={14}/> Tiempo real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// In-hero ambient dashboard loop
function HeroDashboardLoop({ wide }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 1800);
    return () => clearInterval(t);
  }, []);
  const rows = ['Lacteos del Sur SA', 'Distribuidora Norte', 'Estudio Garcia & Asoc.', 'Pizzeria La Esquina', 'Taller Mecanico JR'];
  return (
    <div style={{
      position:'absolute', inset: wide ? '60px 80px' : '60px 36px',
      display:'flex', flexDirection:'column', gap:14,
    }}>
      <div style={{display:'flex', gap:14, flexWrap:'wrap'}}>
        <MiniStat label="Facturado hoy" value="$ 184.500" trend="+8%" />
        <MiniStat label="Por cobrar" value="$ 62.300" trend="−3%" neg />
        <MiniStat label="Stock crítico" value="2 items" trend="" />
      </div>
      <div style={{
        flex:1, background:'rgba(244,239,230,.06)',
        border:'1px solid rgba(244,239,230,.10)',
        borderRadius:14, padding:14, color:'#F4EFE6', fontSize:12.5,
        display:'flex', flexDirection:'column', gap:10, overflow:'hidden'
      }}>
        <div style={{display:'flex', justifyContent:'space-between', opacity:.7, fontSize:11, letterSpacing:'.05em', textTransform:'uppercase'}}>
          <span>Facturas recientes</span>
          <span>CAE</span>
        </div>
        {rows.map((r, i) => {
          const cae = (700000000000 + tick * 17 + i * 31).toString().slice(0, 14);
          return (
            <div key={i} style={{
              display:'flex', justifyContent:'space-between',
              padding:'8px 0', borderTop: i===0?'none':'1px solid rgba(244,239,230,.08)',
              opacity: 1 - i*.08, fontVariantNumeric:'tabular-nums'
            }}>
              <span>{r}</span>
              <span style={{fontFamily:'var(--font-mono)', opacity:.65}}>{cae}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function MiniStat({ label, value, trend, neg }) {
  return (
    <div style={{
      flex:1, minWidth:140,
      background:'rgba(244,239,230,.08)',
      border:'1px solid rgba(244,239,230,.10)',
      borderRadius:12, padding:'12px 14px', color:'#F4EFE6'
    }}>
      <div style={{fontSize:11, opacity:.6, letterSpacing:'.05em', textTransform:'uppercase'}}>{label}</div>
      <div style={{fontSize:20, marginTop:4, fontWeight:500, letterSpacing:'-0.02em'}}>{value}</div>
      {trend && (
        <div style={{
          fontSize:11.5, marginTop:6,
          color: neg ? '#E37449' : '#9BB369'
        }}>{trend} vs ayer</div>
      )}
    </div>
  );
}

function Hero({ variant }) {
  if (variant === 'center') return <HeroCenter />;
  if (variant === 'editorial') return <HeroEditorial />;
  return <HeroSplit />;
}

// === Marquee ==============================================================
const LOGOS = [
  { name: "ARCA", sub: "AFIP" },
  { name: "Mercado Pago" },
  { name: "Modo" },
  { name: "Banco Galicia" },
  { name: "Tiendanube" },
  { name: "Andreani" },
  { name: "Naranja X" },
  { name: "Santander" },
  { name: "Mercado Libre" },
];
function Marquee() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="marquee">
      <div className="container" style={{marginBottom:20, display:'flex', justifyContent:'center'}}>
        <span className="eyebrow">Integrado con tus herramientas</span>
      </div>
      <div className="marquee__track">
        {items.map((l, i) => (
          <div className="marquee__item" key={i}>
            <span style={{fontFamily:'var(--font-serif)', fontStyle:'italic', color:'var(--accent)'}}>✶</span>
            <span>{l.name}</span>
            {l.sub && <span style={{fontSize:12, color:'var(--muted)'}}>· {l.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

// === Stats ================================================================
function Stats() {
  const items = [
    { num: "+100", label: "PyMEs ya facturan con PymeStudio cada mes" },
    { num: "99.9%", label: "Uptime promedio, monitoreado 24/7" },
    { num: "<2", em: "min", label: "Para emitir tu primera factura electrónica" },
    { num: "100%", label: "Argentino · soporte humano en español" },
  ];
  return (
    <section style={{padding:'80px 0 96px'}}>
      <div className="container">
        <div className="reveal" style={{marginBottom: 48, maxWidth: 720}}>
          <span className="eyebrow">Números reales</span>
          <h2 className="section-title">
            Más de una década <em>ayudando</em> a PyMEs argentinas a crecer con orden.
          </h2>
        </div>
        <div className="stats reveal">
          {items.map((s, i) => (
            <div className="stats__item" key={i}>
              <p className="stats__num">{s.num}</p>
              <p className="stats__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === Modules ==============================================================
function Modules() {
  return (
    <section id="productos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Productos</span>
          <h2 className="section-title">
            Cuatro módulos. Una sola <em>plataforma.</em>
          </h2>
          <p className="lede">
            Cada producto resuelve un problema concreto del día a día. Empezá por el que te aprieta hoy
            — los datos se enchufan entre sí cuando sumes el resto.
          </p>
        </div>
        <div className="modules">

          <a className="module-link" style={{gridColumn:'span 8'}} href="factura-facil.html">
            <article className="module module--accent module--wide reveal" style={{gridColumn:'auto', height:'100%'}}>
              <span className="module__num">01 · Disponible</span>
              <div className="module__icon"><IconFactura/></div>
              <h3 className="module__title">FacturaFácil</h3>
              <p className="module__desc">
                Facturación electrónica con CAE real de ARCA. Mono y RI, deuda CCMA en vivo,
                facturación masiva desde Mercado Pago, módulo de impuestos con forecast.
              </p>
              <FacturaPreview/>
              <div className="module__chips">
                <span className="module__chip">CAE real</span>
                <span className="module__chip">Padrón A4</span>
                <span className="module__chip">CCMA</span>
                <span className="module__chip">IIBB</span>
              </div>
              <span className="module__arrow"><IconArrowUpRight size={18}/></span>
            </article>
          </a>

          <a className="module-link" style={{gridColumn:'span 4'}} href="dashboard-bi.html">
            <article className="module reveal" style={{gridColumn:'auto', height:'100%'}}>
              <span className="module__num">02 · Disponible</span>
              <div className="module__icon"><IconChart/></div>
              <h3 className="module__title">Dashboard BI</h3>
              <p className="module__desc">
                Ventas, CMV, márgenes y proveedores en vivo. Asesor IA con contexto real
                del negocio. Sync con Google Drive.
              </p>
              <div className="module__chips">
                <span className="module__chip">Asesor IA</span>
                <span className="module__chip">Forecast</span>
                <span className="module__chip">Pareto</span>
              </div>
              <span className="module__arrow"><IconArrowUpRight size={18}/></span>
            </article>
          </a>

          <a className="module-link" style={{gridColumn:'span 4'}} href="retail.html">
            <article className="module reveal" style={{gridColumn:'auto', height:'100%'}}>
              <span className="module__num">03 · Beta</span>
              <div className="module__icon"><IconCard/></div>
              <h3 className="module__title">Retail</h3>
              <p className="module__desc">
                POS + stock + clientes para comercios y gastronomía. MODO, Mercado Pago, cuotas,
                fidelización y backoffice ERP. Facturación integrada.
              </p>
              <div className="module__chips">
                <span className="module__chip">POS tablet</span>
                <span className="module__chip">MODO QR</span>
                <span className="module__chip">Cuotas</span>
              </div>
              <span className="module__arrow"><IconArrowUpRight size={18}/></span>
            </article>
          </a>

          <a className="module-link" style={{gridColumn:'span 8'}} href="agropecuario.html">
            <article className="module module--forest module--wide reveal" style={{gridColumn:'auto', height:'100%'}}>
              <span className="module__num">04 · Beta</span>
              <div className="module__icon"><IconBox/></div>
              <h3 className="module__title">Agropecuario</h3>
              <p className="module__desc">
                Lotes, hacienda, costos por hectárea y campaña. SENASA DT-e, liquidaciones de
                granos y modo offline para usar en el campo.
              </p>
              <MiniChart/>
              <div className="module__chips">
                <span className="module__chip">SENASA</span>
                <span className="module__chip">Offline</span>
                <span className="module__chip">Trazabilidad</span>
                <span className="module__chip">Liquidaciones</span>
              </div>
              <span className="module__arrow"><IconArrowUpRight size={18}/></span>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
}

function Module({ className = "", num, icon, title, desc, visual }) {
  return (
    <article className={"module reveal " + className}>
      <span className="module__num">{num}</span>
      <div className="module__icon">{icon}</div>
      <h3 className="module__title">{title}</h3>
      <p className="module__desc">{desc}</p>
      {visual && <div style={{marginTop:'auto'}}>{visual}</div>}
    </article>
  );
}

function FacturaPreview() {
  return (
    <div style={{
      marginTop: 16,
      background:'rgba(244,239,230,.06)',
      border:'1px solid rgba(244,239,230,.12)',
      borderRadius: 12,
      padding: 16, fontSize: 12.5,
      display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, color:'#F4EFE6'
    }}>
      <div>
        <div style={{opacity:.6, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Tipo</div>
        <div style={{fontSize:16, marginTop:4}}>Factura A 00001-00000128</div>
        <div style={{marginTop:14, opacity:.6, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Cliente</div>
        <div style={{fontSize:14, marginTop:4}}>Lácteos del Sur S.A.</div>
        <div style={{opacity:.6, marginTop:2, fontSize:12}}>CUIT 30-71234567-8</div>
      </div>
      <div>
        <div style={{opacity:.6, fontSize:10.5, letterSpacing:'.05em', textTransform:'uppercase'}}>Importe</div>
        <div style={{fontSize:22, marginTop:4, letterSpacing:'-0.02em'}}>$ 84.250,00</div>
        <div style={{marginTop:14, display:'flex', gap:6, alignItems:'center', fontSize:11, color:'#9BB369'}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:'#9BB369',display:'inline-block'}}/>
          CAE 70123456789012
        </div>
        <div style={{marginTop:4, fontSize:11, opacity:.6}}>Vto. 19/06/2026</div>
      </div>
    </div>
  );
}

function MiniChart() {
  // Decorative line chart
  const pts = [40, 32, 38, 28, 36, 22, 30, 18, 24, 14, 22, 10];
  const w = 100, h = 60;
  const step = w / (pts.length - 1);
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i*step).toFixed(1)} ${p}`).join(' ');
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div style={{marginTop: 'auto'}}>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{width:'100%', height:80}}>
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E37449" stopOpacity=".55"/>
            <stop offset="100%" stopColor="#E37449" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d={area} fill="url(#g1)"/>
        <path d={d} fill="none" stroke="#E37449" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{display:'flex', justifyContent:'space-between', fontSize:11, opacity:.6, marginTop:6, fontFamily:'var(--font-mono)'}}>
        <span>ENE</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
      </div>
    </div>
  );
}

// === Dashboard mock section ==============================================
const DASH_TABS = [
  { key: 'Facturas', label: 'Facturas', desc: 'Emitidas en el mes, con CAE y vencimientos' },
  { key: 'Caja',     label: 'Caja',     desc: 'Flujo de ingresos y egresos en vivo' },
  { key: 'Stock',    label: 'Stock',    desc: 'Inventario por depósito con alertas' },
  { key: 'Equipo',   label: 'Equipo',   desc: 'Sueldos liquidados y F.931 listos' },
];

const DASH_FEATURES = [
  { icon: <IconBolt/>, title: 'Datos en tiempo real',
    desc: 'Lo que vendés, cobrás y gastás se sincroniza al instante entre módulos.' },
  { icon: <IconPlug/>, title: 'Sin doble carga',
    desc: 'Cada factura mueve stock, asiento contable y caja. No tipeás nada dos veces.' },
  { icon: <IconShield/>, title: 'Tu contador adentro',
    desc: 'Libros IVA, F.931 e integra con tu ERP sin salir del sistema.' },
];

function Dashboard() {
  const [tab, setTab] = useState(0);
  return (
    <section>
      <div className="container">
        <div className="dashboard reveal">
          <div className="dashboard__left">
            <span className="eyebrow" style={{color:'rgba(244,239,230,.7)'}}>El producto en acción</span>
            <h2 className="dashboard__title">
              Todo lo que pasa en tu PyME,<br/><em>en una sola pantalla.</em>
            </h2>
            <p className="dashboard__desc">
              Cambiá entre módulos sin perder el contexto. Los números cruzan entre
              facturación, banco, stock y sueldos —sin exportar Excels ni esperar al mes que viene.
            </p>
            <div className="dashboard__kpis">
              <div className="dashboard__kpi">
                <div className="dashboard__kpi-label">Facturado mes</div>
                <div className="dashboard__kpi-value">$ 428k</div>
                <div className="dashboard__kpi-trend">↑ +8,2% vs abril</div>
              </div>
              <div className="dashboard__kpi">
                <div className="dashboard__kpi-label">Caja del día</div>
                <div className="dashboard__kpi-value">$ 47k</div>
                <div className="dashboard__kpi-trend">↑ +12% vs ayer</div>
              </div>
              <div className="dashboard__kpi">
                <div className="dashboard__kpi-label">Por cobrar</div>
                <div className="dashboard__kpi-value">$ 18k</div>
                <div className="dashboard__kpi-trend dashboard__kpi-trend--neg">3 vencidas</div>
              </div>
            </div>
            <div className="dashboard__features">
              {DASH_FEATURES.map((f, i) => (
                <div key={i} className="dashboard__feature">
                  {f.icon}
                  <span><strong>{f.title}.</strong> {f.desc}</span>
                </div>
              ))}
            </div>
            <div className="dashboard__tabs">
              {DASH_TABS.map((t, i) => (
                <button key={t.key} className={"dashboard__tab" + (i === tab ? " active" : "")} onClick={() => setTab(i)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div style={{fontSize:13.5, color:'rgba(244,239,230,.55)', marginBottom:24, minHeight:'1.4em'}}>
              {DASH_TABS[tab].desc}
            </div>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <a href="#" className="btn btn--accent">Ver demo guiada <IconArrowRight size={16}/></a>
              <a href="#contacto" className="btn btn--ghost" style={{color:'#F4EFE6', borderColor:'rgba(244,239,230,.25)'}}>Empezar gratis</a>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center'}}>
            {tab === 0 && <UIFacturas/>}
            {tab === 1 && <UICaja/>}
            {tab === 2 && <UIStock/>}
            {tab === 3 && <UIEquipo/>}
          </div>
        </div>
      </div>
    </section>
  );
}

function UIShell({ title, children, badge }) {
  return (
    <div className="ui-mock">
      <div className="ui-mock__head">
        <div className="ui-mock__head-left">
          <span style={{width:10,height:10,borderRadius:'50%',background:'#E37449',display:'inline-block'}}/>
          {title}
        </div>
        {badge && <span style={{fontSize:11.5, color:'var(--muted)', fontFamily:'var(--font-mono)'}}>{badge}</span>}
      </div>
      <div className="ui-mock__body">{children}</div>
    </div>
  );
}

function UIFacturas() {
  const rows = [
    ['00000128', 'Lácteos del Sur SA', 'A', '$ 84.250', 'CAE', 'ok'],
    ['00000127', 'Distribuidora Norte', 'B', '$ 32.400', 'CAE', 'ok'],
    ['00000126', 'Estudio García', 'A', '$ 28.600', 'Pendiente', 'pend'],
    ['00000125', 'Pizzería La Esquina', 'C', '$ 12.800', 'CAE', 'ok'],
    ['00000124', 'Taller Mec. JR', 'B', '$ 46.500', 'CAE', 'ok'],
  ];
  return (
    <UIShell title="Facturas emitidas" badge="MAY 2026">
      <div style={{display:'grid', gridTemplateColumns:'1fr auto auto auto', gap:'8px 14px', fontSize:12.5}}>
        <div style={{color:'var(--muted)', fontSize:11, letterSpacing:'.04em', textTransform:'uppercase'}}>Cliente</div>
        <div style={{color:'var(--muted)', fontSize:11, letterSpacing:'.04em', textTransform:'uppercase', textAlign:'right'}}>N°</div>
        <div style={{color:'var(--muted)', fontSize:11, letterSpacing:'.04em', textTransform:'uppercase', textAlign:'right'}}>Importe</div>
        <div style={{color:'var(--muted)', fontSize:11, letterSpacing:'.04em', textTransform:'uppercase'}}>Estado</div>
        {rows.map((r, i) => (
          <React.Fragment key={i}>
            <div style={{borderTop:'1px solid var(--line)', paddingTop:8}}>{r[1]} <span style={{color:'var(--muted)'}}>· {r[2]}</span></div>
            <div style={{borderTop:'1px solid var(--line)', paddingTop:8, textAlign:'right', fontFamily:'var(--font-mono)', color:'var(--muted)'}}>{r[0]}</div>
            <div style={{borderTop:'1px solid var(--line)', paddingTop:8, textAlign:'right', fontVariantNumeric:'tabular-nums'}}>{r[3]}</div>
            <div style={{borderTop:'1px solid var(--line)', paddingTop:8}}>
              <span style={{
                display:'inline-flex', gap:6, alignItems:'center', fontSize:11.5,
                padding:'3px 8px', borderRadius:999,
                background: r[5]==='ok' ? '#E8F0DA' : '#FCE9DA',
                color: r[5]==='ok' ? '#3F5142' : '#A6431C'
              }}>
                <span style={{width:6,height:6,borderRadius:'50%',background:'currentColor'}}/>
                {r[4]}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </UIShell>
  );
}

function UICaja() {
  return (
    <UIShell title="Flujo de caja" badge="ÚLTIMOS 30 DÍAS">
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:18}}>
        <div style={{padding:14, background:'var(--bg-2)', borderRadius:10}}>
          <div style={{fontSize:11, color:'var(--muted)', letterSpacing:'.04em', textTransform:'uppercase'}}>Ingresos</div>
          <div style={{fontSize:22, marginTop:6, fontWeight:500, letterSpacing:'-0.02em'}}>$ 428.000</div>
          <div style={{fontSize:12, color:'#3F5142', marginTop:2}}>+8,2% vs mes anterior</div>
        </div>
        <div style={{padding:14, background:'var(--bg-2)', borderRadius:10}}>
          <div style={{fontSize:11, color:'var(--muted)', letterSpacing:'.04em', textTransform:'uppercase'}}>Egresos</div>
          <div style={{fontSize:22, marginTop:6, fontWeight:500, letterSpacing:'-0.02em'}}>$ 312.000</div>
          <div style={{fontSize:12, color:'#A6431C', marginTop:2}}>+2,4% vs mes anterior</div>
        </div>
      </div>
      <svg viewBox="0 0 300 90" style={{width:'100%', height:110}}>
        <defs>
          <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#C24A1F" stopOpacity=".25"/>
            <stop offset="100%" stopColor="#C24A1F" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0 60 L30 50 L60 56 L90 40 L120 44 L150 30 L180 36 L210 22 L240 28 L270 14 L300 18 L300 90 L0 90 Z" fill="url(#ga)"/>
        <path d="M0 60 L30 50 L60 56 L90 40 L120 44 L150 30 L180 36 L210 22 L240 28 L270 14 L300 18" fill="none" stroke="#C24A1F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M0 75 L30 72 L60 68 L90 66 L120 62 L150 60 L180 58 L210 55 L240 56 L270 52 L300 50" fill="none" stroke="#2B3A2E" strokeOpacity=".5" strokeWidth="1.2" strokeDasharray="3 3"/>
      </svg>
      <div style={{display:'flex', gap:16, marginTop:8, fontSize:11.5, color:'var(--muted)'}}>
        <span style={{display:'inline-flex', alignItems:'center', gap:6}}><span style={{width:10,height:2,background:'#C24A1F'}}/> Ingresos</span>
        <span style={{display:'inline-flex', alignItems:'center', gap:6}}><span style={{width:10,height:2,background:'#2B3A2E',opacity:.5}}/> Egresos</span>
      </div>
    </UIShell>
  );
}

function UIStock() {
  const items = [
    ['Yerba Mate 1kg', 124, 'OK', 'ok'],
    ['Aceite Girasol 900ml', 18, 'Bajo', 'warn'],
    ['Café Molido 500g', 3, 'Crítico', 'crit'],
    ['Azúcar 1kg', 87, 'OK', 'ok'],
    ['Harina 000 1kg', 12, 'Bajo', 'warn'],
  ];
  return (
    <UIShell title="Stock por depósito" badge="DEPÓSITO CENTRAL">
      <div style={{display:'flex', flexDirection:'column', gap:0}}>
        {items.map((it, i) => (
          <div key={i} style={{display:'grid', gridTemplateColumns:'1fr auto auto', gap:14, padding:'10px 0', borderTop: i===0?'none':'1px solid var(--line)', alignItems:'center'}}>
            <div>{it[0]}</div>
            <div style={{fontFamily:'var(--font-mono)', color:'var(--muted)', fontSize:12}}>{it[1]} u.</div>
            <span style={{
              fontSize:11, padding:'3px 8px', borderRadius:999,
              background: it[3]==='ok'?'#E8F0DA': it[3]==='warn'?'#FCE9DA':'#F9D7CB',
              color:    it[3]==='ok'?'#3F5142': it[3]==='warn'?'#A6431C':'#7A2A0E'
            }}>{it[2]}</span>
          </div>
        ))}
      </div>
    </UIShell>
  );
}

function UIEquipo() {
  const people = [
    ['Camila R.', 'Administración', '$ 380.000', 'al día'],
    ['Martín L.', 'Ventas', '$ 420.000 + comisión', 'al día'],
    ['Sofía B.', 'Operaciones', '$ 360.000', 'al día'],
  ];
  return (
    <UIShell title="Liquidación de sueldos" badge="MAYO 2026 · F.931 LISTO">
      <div style={{display:'flex', flexDirection:'column'}}>
        {people.map((p, i) => (
          <div key={i} style={{display:'grid', gridTemplateColumns:'auto 1fr auto auto', gap:14, padding:'12px 0', borderTop: i===0?'none':'1px solid var(--line)', alignItems:'center'}}>
            <div style={{width:32, height:32, borderRadius:'50%', background:'var(--bg-2)', display:'grid', placeItems:'center', fontSize:12, fontWeight:500}}>
              {p[0].split(' ').map(x=>x[0]).join('')}
            </div>
            <div>
              <div style={{fontSize:13.5}}>{p[0]}</div>
              <div style={{fontSize:11.5, color:'var(--muted)'}}>{p[1]}</div>
            </div>
            <div style={{fontSize:12.5, color:'var(--muted)'}}>{p[2]}</div>
            <span style={{fontSize:11, padding:'3px 8px', borderRadius:999, background:'#E8F0DA', color:'#3F5142'}}>{p[3]}</span>
          </div>
        ))}
      </div>
    </UIShell>
  );
}

// === Steps ================================================================
function Steps() {
  const steps = [
    { num: '001', title: 'Migración asistida', desc: 'Subís tu Excel, planilla o exportás desde tu sistema viejo. Te ayudamos sin costo.' , icon: <IconArrowUpRight/> },
    { num: '002', title: 'Conectá ARCA', desc: 'Asociás tu CUIT en 2 minutos. Validamos punto de venta y certificados.' , icon: <IconShield/> },
    { num: '003', title: 'Primera factura', desc: 'Emití factura A, B o C con CAE en menos de 2 minutos.' , icon: <IconFactura/> },
    { num: '004', title: 'Cobrás y conciliás', desc: 'Mandás link de pago. El cobro entra y se concilia solo con tu banco.' , icon: <IconCard/> },
    { num: '005', title: 'Crecés con datos', desc: 'Reportes vivos te dicen qué clientes y productos te hacen ganar.' , icon: <IconChart/> },
  ];
  return (
    <section id="como-funciona">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="section-title">
            De caos a control <em>en cinco pasos.</em>
          </h2>
          <p className="lede">
            Onboarding humano con migración asistida. La mayoría de las PyMEs
            facturan en su primer día.
          </p>
        </div>
        <div className="steps reveal">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="step__icon">{s.icon}</div>
              <span className="step__num">{s.num}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === Testimonials =========================================================
function Testimonials() {
  const items = [
    {
      quote: "Pasamos de 3 sistemas distintos a uno solo. La facturación con ARCA dejó de ser un dolor de cabeza.",
      name: "Mariana Pérez", role: "Dueña, Distribuidora Sur",
      img: "https://i.pravatar.cc/120?img=5"
    },
    {
      quote: "Mi contador entra a PymeStudio y trabaja directo. Ahorramos *dos días* al mes de exportar Excels.",
      name: "Ezequiel Romero", role: "CEO, Romero Indumentaria",
      img: "https://i.pravatar.cc/120?img=14"
    },
    {
      quote: "El reporte de flujo de caja proyectado me salvó un mes complicado. Sabía antes que se venía el bache.",
      name: "Lucía Fernández", role: "Co-founder, Estudio Núcleo",
      img: "https://i.pravatar.cc/120?img=20"
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head reveal" style={{maxWidth:'none', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', gap:32, flexWrap:'wrap'}}>
          <div>
            <span className="eyebrow">Testimonios</span>
            <h2 className="section-title">Lo que dicen las <em>PyMEs</em> que ya lo usan.</h2>
          </div>
          <a href="#" className="btn btn--ghost">Ver casos completos <IconArrowUpRight size={16}/></a>
        </div>
        <div className="testimonials reveal">
          {items.map((t, i) => {
            // bold *text* parts as italic serif
            const parts = t.quote.split(/(\*[^*]+\*)/g);
            return (
              <article key={i} className="testimonial">
                <div className="testimonial__stars">
                  {Array.from({length:5}).map((_,j) => <IconStar key={j} size={14}/>)}
                </div>
                <p className="testimonial__quote">
                  "{parts.map((p, j) =>
                    p.startsWith('*') ? <em key={j}>{p.slice(1,-1)}</em> : <React.Fragment key={j}>{p}</React.Fragment>
                  )}"
                </p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar" style={{backgroundImage:`url(${t.img})`}}/>
                  <div>
                    <div className="testimonial__name">{t.name}</div>
                    <div className="testimonial__role">{t.role}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// === Pricing ==============================================================
const PLANS = [
  {
    name: 'Inicial', desc: 'Para monotributistas y emprendedores que recién empiezan a facturar.',
    monthly: 4900, yearly: 3900, featured: false,
    features: [
      'Facturas A, B, C, M ilimitadas',
      'Conexión ARCA y AFIP',
      'Cobros con Mercado Pago',
      '1 usuario incluido',
      'Soporte por chat (lun-vie)',
    ]
  },
  {
    name: 'Negocio', desc: 'Para PyMEs en crecimiento que ya tienen empleados y contador.',
    monthly: 14900, yearly: 11900, featured: true,
    features: [
      'Todo lo del plan Inicial',
      'Contabilidad + Libro IVA',
      'Stock multi-depósito',
      'Hasta 5 usuarios + contador gratis',
      'Reportes en vivo',
      'Soporte prioritario',
    ]
  },
  {
    name: 'Estudio', desc: 'Para contadores y estudios que gestionan varias empresas.',
    monthly: 34900, yearly: 27900, featured: false,
    features: [
      'Todo lo del plan Negocio',
      'Hasta 25 CUITs en una cuenta',
      'Usuarios ilimitados',
      'Conciliación bancaria avanzada',
      'API + integración a medida',
      'Onboarding white-glove',
    ]
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(true);
  const trackRef = useRef(null);
  const [slider, setSlider] = useState({left: 4, width: 100});

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const btn = track.querySelector(yearly ? '[data-key="yearly"]' : '[data-key="monthly"]');
    if (btn) {
      setSlider({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [yearly]);

  return (
    <section id="precios">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Precios</span>
          <h2 className="section-title">Planes simples, <em>sin sorpresas.</em></h2>
          <p className="lede">Primer mes gratis. Cambiá de plan o cancelá cuando quieras.</p>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div className="pricing-toggle" ref={trackRef}>
            <div className="pricing-toggle__slider" style={{left:slider.left, width:slider.width}}/>
            <button className={"pricing-toggle__btn" + (!yearly ? ' active' : '')} data-key="monthly" onClick={() => setYearly(false)}>Mensual</button>
            <button className={"pricing-toggle__btn" + (yearly ? ' active' : '')} data-key="yearly" onClick={() => setYearly(true)}>
              Anual <span className="pricing-toggle__badge">−20%</span>
            </button>
          </div>
        </div>
        <div className="pricing reveal">
          {PLANS.map((p) => (
            <article key={p.name} className={"plan" + (p.featured ? ' plan--featured' : '')}>
              {p.featured && <span className="plan__badge">Más elegido</span>}
              <h3 className="plan__name">{p.name}</h3>
              <div>
                <span className="plan__price">
                  $ {(yearly ? p.yearly : p.monthly).toLocaleString('es-AR')}
                  <span className="plan__price-period"> /mes</span>
                </span>
                {yearly && <div className="plan__price-old">$ {p.monthly.toLocaleString('es-AR')} si pagás mensual</div>}
              </div>
              <p className="plan__desc">{p.desc}</p>
              <ul className="plan__features">
                {p.features.map(f => (
                  <li key={f} className="plan__feature">
                    <IconCheck size={16}/> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={p.featured ? "btn btn--accent" : "btn btn--primary"} style={{marginTop:'auto'}}>
                Empezar gratis <IconArrowRight size={16}/>
              </a>
            </article>
          ))}
        </div>
        <p style={{textAlign:'center', marginTop:32, fontSize:13.5, color:'var(--muted)'}}>
          Todos los precios en pesos argentinos. IVA incluido. ¿Necesitás algo a medida? <a href="#" style={{color:'var(--accent)', textDecoration:'underline'}}>Hablá con ventas</a>.
        </p>
      </div>
    </section>
  );
}

// === Blog =================================================================
function Blog() {
  const posts = [
    { date: '12 mayo 2026', tag: 'ARCA', slug: 'arca-guia-pymes', title: 'Qué cambia con ARCA: la guía para PyMEs argentinas',
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=70' },
    { date: '04 mayo 2026', tag: 'Contabilidad', slug: 'balance-trimestral', title: 'Cómo cerrar tu balance trimestral sin pánico',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=70' },
    { date: '21 abril 2026', tag: 'Crecimiento', slug: '7-indicadores-pyme', title: '7 indicadores para entender la salud de tu negocio',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=70' },
  ];
  return (
    <section id="recursos">
      <div className="container">
        <div className="section-head reveal" style={{maxWidth:'none', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', gap:32, flexWrap:'wrap'}}>
          <div>
            <span className="eyebrow">Recursos</span>
            <h2 className="section-title">Aprendé a llevar tu PyME, <em>con criterio.</em></h2>
          </div>
          <a href="blog.html" className="btn btn--ghost">Ir al blog <IconArrowUpRight size={16}/></a>
        </div>
        <div className="blog-grid reveal">
          {posts.map((p, i) => (
            <a className="post" key={i} href={`blog.html#${p.slug}`}>
              <div className="post__img" style={{backgroundImage:`url(${p.img})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
              <div className="post__meta">{p.date} · {p.tag}</div>
              <h3 className="post__title">{p.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// === FAQ ==================================================================
const FAQS = [
  { q: '¿Sirve si soy monotributista?', a: 'Sí. Podés emitir factura C o E desde el plan Inicial. Si más adelante pasás a Responsable Inscripto, cambiás el tipo de facturación con un click —no migrás de plataforma.' },
  { q: '¿Cómo es la conexión con ARCA / AFIP?', a: 'Asociamos tu CUIT vía clave fiscal y delegación de servicios. El proceso lo guiamos paso a paso y suele tardar 2-3 minutos. Soportamos punto de venta web y controlado.' },
  { q: '¿Mi contador puede entrar al sistema?', a: 'Sí —y sin costo extra. Tu contador tiene un usuario propio con acceso a libros IVA, balances, y exportación a SIAP / Tango / Bejerman / cualquier ERP que use.' },
  { q: '¿Puedo migrar desde mi sistema actual?', a: 'Te ayudamos a migrar desde Tango, Bejerman, Holistor, Colppy, Xubio, Contabilium y planillas de Excel. La migración asistida es gratis hasta 24 meses de histórico.' },
  { q: '¿Qué pasa si crece mi PyME?', a: 'Cambiás de plan en línea, sin recontratar nada. Los datos no se mueven —solo se desbloquean módulos y usuarios adicionales.' },
  { q: '¿Mi información está segura?', a: 'Servidores en Argentina y respaldo en AWS São Paulo. Cifrado en tránsito y en reposo, 2FA en todos los usuarios, y exportación de tus datos cuando quieras. ISO 27001 en proceso.' },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section>
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-title">Lo que la gente nos <em>pregunta antes</em> de probarlo.</h2>
        </div>
        <div className="faq reveal">
          {FAQS.map((f, i) => {
            const isOpen = i === open;
            return (
              <div key={i} className={"faq__item" + (isOpen ? ' open' : '')}>
                <button className="faq__btn" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <span className="faq__toggle"><IconPlus size={14}/></span>
                </button>
                <div className="faq__panel" style={{maxHeight: isOpen ? 200 : 0}}>
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

// === Services (external services banner) ==================================
function Services() {
  const services = [
    {
      brand: 'SAS',
      brandItalic: 'rápido',
      url: 'https://saspyme.vercel.app/',
      tagline: 'Constituí tu SAS en 24 horas.',
      desc: 'IA + firma digital + portal del cliente. Estatuto generado al instante, sin escribano, sin papeleo. Ley 27.349.',
      bullets: [
        'Estatuto redactado por IA en segundos',
        'Firma digital remota — sin presencia física',
        'Portal personalizado para cada cliente',
        'Presentación y CUIT incluidos',
      ],
      cta: 'Empezar trámite',
      stat: { num: '24', unit: 'hs', label: 'Inscripción típica en CABA' },
      visual: 'sas',
    },
    {
      brand: 'RIMI',
      brandItalic: ' Agent',
      url: 'https://pymerimi.vercel.app/',
      tagline: '¿Tu PyME califica al RIMI 2026?',
      desc: 'Diagnóstico fiscal con IA: RIMI, Economía del Conocimiento, capacitación, exportación. 8+ incentivos analizados en 60 segundos.',
      bullets: [
        'Análisis IA en 60 segundos',
        '8+ incentivos del marco PyME 2026',
        'Checklist documental personalizado',
        'Sin registro, sin CUIT, anónimo',
      ],
      cta: 'Hacer diagnóstico',
      stat: { num: '21', unit: '%', label: 'IVA devuelto anticipado · Dec. 242/26' },
      visual: 'rimi',
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services__head reveal">
          <div>
            <span className="eyebrow">Servicios complementarios</span>
            <h2 className="section-title">Más allá de <em>PymeStudio.</em></h2>
            <p className="lede" style={{marginTop:14}}>
              Dos herramientas independientes que conviven con tu gestión diaria —
              para cuando necesitás constituir una sociedad o aprovechar incentivos fiscales.
            </p>
          </div>
        </div>

        <div className="services__grid reveal">
          {services.map((s, i) => (
            <a key={i} className="service-card" href={s.url} target="_blank" rel="noopener noreferrer">
              <div className={"service-card__visual service-card__visual--" + s.visual}>
                {s.visual === 'sas' ? <ServiceVisualSAS/> : <ServiceVisualRIMI/>}
              </div>
              <div className="service-card__body">
                <div className="service-card__brand">
                  {s.brand}<em>{s.brandItalic}</em>
                </div>
                <h3 className="service-card__tagline">{s.tagline}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <ul className="service-card__bullets">
                  {s.bullets.map((b, j) => (
                    <li key={j}><IconCheck size={14}/> {b}</li>
                  ))}
                </ul>
                <div className="service-card__foot">
                  <div className="service-card__stat">
                    <div className="service-card__stat-num">
                      {s.stat.num}<span>{s.stat.unit}</span>
                    </div>
                    <div className="service-card__stat-label">{s.stat.label}</div>
                  </div>
                  <span className="service-card__cta">
                    {s.cta} <IconArrowUpRight size={16}/>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="services__note reveal">
          Servicios provistos por partners de PymeStudio. Se abren en una nueva pestaña.
        </p>
      </div>
    </section>
  );
}

// SVG visuals embedded inside each card — iconographic mocks
function ServiceVisualSAS() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sas-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1E4538"/>
          <stop offset="1" stopColor="#2A6450"/>
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#sas-bg)"/>
      {/* Document card */}
      <g transform="translate(120,30)">
        <rect width="160" height="170" rx="10" fill="#FBF8F1"/>
        <rect x="20" y="22" width="80" height="6" rx="3" fill="#1E4538"/>
        <rect x="20" y="38" width="120" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        <rect x="20" y="46" width="100" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        <rect x="20" y="54" width="115" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        <rect x="20" y="62" width="80" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        <rect x="20" y="80" width="120" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        <rect x="20" y="88" width="100" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        <rect x="20" y="96" width="115" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        {/* Signature line */}
        <path d="M 28 130 Q 40 120 55 130 T 90 130" stroke="#1E4538" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <rect x="20" y="142" width="60" height="2" rx="1" fill="#1E4538" opacity=".25"/>
        {/* Check stamp */}
        <circle cx="125" cy="135" r="18" fill="#CCE2BD"/>
        <path d="M 117 135 l 6 6 l 11 -11" stroke="#1E4538" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* 24hr badge */}
      <g transform="translate(40,80)">
        <circle cx="0" cy="0" r="34" fill="#CCE2BD"/>
        <text x="0" y="2" textAnchor="middle" fontFamily="Geist" fontSize="22" fontWeight="600" fill="#1E4538">24</text>
        <text x="0" y="18" textAnchor="middle" fontFamily="Geist" fontSize="9" fontWeight="500" fill="#1E4538" letterSpacing="1.5">HORAS</text>
      </g>
      {/* Floating tag */}
      <g transform="translate(310,150)">
        <rect x="-46" y="-12" width="92" height="24" rx="12" fill="#CCE2BD"/>
        <text x="0" y="4" textAnchor="middle" fontFamily="Geist" fontSize="10" fontWeight="500" fill="#1E4538">Firma digital ✓</text>
      </g>
    </svg>
  );
}

function ServiceVisualRIMI() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="rimi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#CCE2BD"/>
          <stop offset="1" stopColor="#B8D3A6"/>
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#rimi-bg)"/>
      {/* Dashboard card */}
      <g transform="translate(60,28)">
        <rect width="280" height="164" rx="12" fill="#FBF8F1"/>
        {/* Header */}
        <rect x="18" y="18" width="100" height="6" rx="3" fill="#1E4538"/>
        <rect x="18" y="30" width="160" height="3" rx="1.5" fill="#1E4538" opacity=".4"/>
        {/* Big number stat */}
        <text x="18" y="78" fontFamily="Geist" fontSize="38" fontWeight="600" fill="#1E4538" letterSpacing="-1">$ 142k</text>
        <text x="18" y="96" fontFamily="Geist" fontSize="9" fontWeight="500" fill="#1E4538" opacity=".6" letterSpacing="1">BENEFICIO ESTIMADO</text>
        {/* Bar chart */}
        <g transform="translate(18,108)">
          <rect x="0" y="22" width="36" height="20" rx="3" fill="#1E4538" opacity=".25"/>
          <rect x="44" y="14" width="36" height="28" rx="3" fill="#1E4538" opacity=".4"/>
          <rect x="88" y="6" width="36" height="36" rx="3" fill="#1E4538" opacity=".6"/>
          <rect x="132" y="0" width="36" height="42" rx="3" fill="#1E4538"/>
        </g>
        {/* Check list right */}
        <g transform="translate(190,52)">
          <g transform="translate(0,0)">
            <circle cx="6" cy="6" r="6" fill="#1E4538"/>
            <path d="M 3 6 l 2 2 l 4 -4" stroke="#FBF8F1" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="18" y="3" width="58" height="3" rx="1.5" fill="#1E4538" opacity=".6"/>
            <rect x="18" y="9" width="40" height="3" rx="1.5" fill="#1E4538" opacity=".3"/>
          </g>
          <g transform="translate(0,22)">
            <circle cx="6" cy="6" r="6" fill="#1E4538"/>
            <path d="M 3 6 l 2 2 l 4 -4" stroke="#FBF8F1" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="18" y="3" width="50" height="3" rx="1.5" fill="#1E4538" opacity=".6"/>
            <rect x="18" y="9" width="60" height="3" rx="1.5" fill="#1E4538" opacity=".3"/>
          </g>
          <g transform="translate(0,44)">
            <circle cx="6" cy="6" r="6" fill="#1E4538"/>
            <path d="M 3 6 l 2 2 l 4 -4" stroke="#FBF8F1" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="18" y="3" width="62" height="3" rx="1.5" fill="#1E4538" opacity=".6"/>
            <rect x="18" y="9" width="44" height="3" rx="1.5" fill="#1E4538" opacity=".3"/>
          </g>
        </g>
      </g>
      {/* IA chip */}
      <g transform="translate(38,180)">
        <rect x="0" y="0" width="78" height="22" rx="11" fill="#1E4538"/>
        <text x="39" y="14" textAnchor="middle" fontFamily="Geist" fontSize="10" fontWeight="500" fill="#CCE2BD">✦ IA · 60 seg</text>
      </g>
    </svg>
  );
}

// === Closing CTA ==========================================================
function Closing() {
  return (
    <section id="contacto">
      <div className="container">
        <div className="closing reveal">
          <div>
            <span className="eyebrow">Empezá hoy</span>
            <h2 className="closing__title">¿Listo para ordenar <em>tu PyME?</em></h2>
            <p className="closing__desc">
              14 días gratis. Migración asistida sin costo. Si no te enamora, te devolvemos todo —sin preguntas.
            </p>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <a href="#" className="btn btn--primary">Probar gratis <IconArrowRight size={16}/></a>
              <a href="#" className="btn btn--ghost"><IconChat size={14}/> Hablar con ventas</a>
            </div>
            <div style={{marginTop:32, display:'flex', alignItems:'center', gap:14}}>
              <div className="hero__avatar-stack">
                {AVATARS.slice(0,3).map((src, i) => (
                  <div key={i} className="hero__avatar" style={{ backgroundImage: `url(${src})`, borderColor:'var(--forest)' }}/>
                ))}
              </div>
              <span style={{fontSize:13.5, color:'rgba(244,239,230,.75)'}}>
                +100 PyMEs eligen PymeStudio
              </span>
            </div>
          </div>
          <div className="closing__img">
            <image-slot id="closing-img" shape="rounded" radius="22"
              placeholder="Foto de tu equipo o lugar de trabajo"
              style={{width:'100%', height:'100%', display:'block'}}>
            </image-slot>
          </div>
        </div>
      </div>
    </section>
  );
}

// === Footer ===============================================================
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__big reveal">
          Pyme<em>Studio</em>
        </p>
        <div className="footer__grid">
          <div className="footer__col footer__about">
            <a href="#" className="nav__logo">
              <span className="nav__logo-mark"><SumaLogo size={28}/></span>
              <span>PymeStudio</span>
            </a>
            <p>Hecho en Buenos Aires. Pensado para PyMEs argentinas que crecen.</p>
            <div style={{display:'flex', gap:10, marginTop:20}}>
              <a href="#" aria-label="X / Twitter" className="footer__social"><IconX size={18}/></a>
              <a href="#" aria-label="Instagram" className="footer__social"><IconInstagram size={18}/></a>
              <a href="#" aria-label="LinkedIn" className="footer__social"><IconLinkedin size={18}/></a>
              <a href="#" aria-label="YouTube" className="footer__social"><IconYoutube size={18}/></a>
            </div>
            <div style={{display:'flex', gap:10, marginTop:16, flexWrap:'wrap'}}>
              <a href="#" className="chip"><IconGlobe size={14}/> ES — AR</a>
              <a href="#" className="chip"><span style={{width:6,height:6,borderRadius:'50%',background:'#3F5142'}}/> Estado · operativo</a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Producto</h4>
            <ul>
              <li><a href="#">Facturación</a></li>
              <li><a href="#">Contabilidad</a></li>
              <li><a href="#">Stock</a></li>
              <li><a href="#">Sueldos</a></li>
              <li><a href="#">Reportes</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreras</a></li>
              <li><a href="#">Prensa</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Soporte</h4>
            <ul>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Migración asistida</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Términos</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 PymeStudio · CUIT 30-71234567-8 · Av. Corrientes 1234, CABA</span>
          <span>Diseñado con cariño en Buenos Aires</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Drawer, Hero, Marquee, Stats, Modules, Dashboard,
  Steps, Testimonials, Pricing, Blog, FAQ, Closing, Footer,
  useReveal,
});
