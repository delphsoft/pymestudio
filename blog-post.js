// === Blog Post Page =======================================================
const { useState: useStateBP, useEffect: useEffectBP } = React;

// Each post has full body. Bodies are simple — paragraphs, headings, lists,
// pull-quotes. Authors are real-sounding Argentine names.
const POST_BODIES = {
  'arca-guia-pymes': {
    slug: 'arca-guia-pymes',
    date: '12 mayo 2026',
    readTime: '6 min',
    tag: 'ARCA',
    title: 'Qué cambia con ARCA: la guía para PyMEs argentinas',
    deck: 'AFIP pasó a llamarse ARCA. Cambian formularios, certificados y plazos —pero no las obligaciones. Repasamos qué tenés que hacer hoy y qué podés dejar para más adelante.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    author: { name: 'Florencia Sosa', role: 'Contadora Pública · CABA' },
    body: [
      ['p', 'La reorganización del organismo recaudador en ARCA generó más confusión que cambios reales. Si tenés una PyME, lo más importante a entender es esto: tus obligaciones de fondo no cambiaron. Lo que cambia es el envoltorio.'],
      ['h2', 'Qué se mantiene igual'],
      ['p', 'Las obligaciones sustantivas siguen idénticas. Seguís facturando con CAE, presentando IVA mensual, F.931 si tenés empleados y Ganancias anual. Las escalas, alícuotas y formularios principales no se tocaron.'],
      ['ul', [
        'Tipos de comprobante (A, B, C, M, E) sin cambios',
        'Períodos fiscales y vencimientos calendario, iguales',
        'Régimen simplificado / Monotributo, sin alteraciones',
      ]],
      ['h2', 'Qué cambia operativamente'],
      ['p', 'Cambian los puntos de entrada digitales. La clave fiscal sigue funcionando, pero algunos certificados (puntos de venta, delegación de servicios) están migrando a nuevas URLs. Si tu sistema de facturación está actualizado, no notás nada.'],
      ['quote', 'El 90% de las PyMEs no tiene que hacer ningún trámite especial por ARCA. Lo único es revisar que tu sistema de facturación esté en la versión nueva.'],
      ['h2', 'Checklist práctico'],
      ['ul', [
        'Verificá que tu sistema emita con el endpoint nuevo (tu proveedor debería haberlo hecho ya).',
        'Confirmá que la clave fiscal y delegaciones estén activas. Probá entrando una vez.',
        'Revisá los puntos de venta autorizados. Si emitís web, no debería haber drama.',
        'Si usás Mis Comprobantes para consultar facturas recibidas, está todo igual.',
      ]],
      ['h2', 'Plazos y multas'],
      ['p', 'Por ahora ARCA está siendo flexible con desfasajes técnicos —no con las obligaciones de fondo. No pagar IVA porque "estaba todo cambiando" no es excusa: las multas siguen vigentes. Pagá en término, aunque después rectifiques.'],
    ],
  },
  'balance-trimestral': {
    slug: 'balance-trimestral',
    date: '04 mayo 2026',
    readTime: '8 min',
    tag: 'Contabilidad',
    title: 'Cómo cerrar tu balance trimestral sin pánico',
    deck: 'Un checklist práctico que usan estudios contables para cerrar trimestres sin pelearse con el contador. Spoiler: empieza el día 1 del trimestre, no el último.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    author: { name: 'Diego Caballero', role: 'Estudio Contable Caballero & Asoc.' },
    body: [
      ['p', 'Si llegás al último día del trimestre con todo el papelerío suelto, ya perdiste. El cierre prolijo se construye día a día, no en una maratón final. Acá te dejamos el sistema que usamos con clientes que tienen su contabilidad ordenada.'],
      ['h2', 'Semana 1 del trimestre: setup'],
      ['p', 'En la primera semana del nuevo trimestre, ordená el cierre anterior. Archivá comprobantes, confirmá conciliaciones bancarias y bloqueá el período en el sistema para que nadie modifique nada hacia atrás.'],
      ['h2', 'Mensual: las tres revisiones que importan'],
      ['ul', [
        'Conciliación bancaria al día 5 del mes siguiente, sin excepciones.',
        'Revisión de cuenta corriente clientes (¿quién está vencido?).',
        'Cierre de caja física semanal —diaria si tenés punto de venta.',
      ]],
      ['quote', 'El trabajo del cierre trimestral debería ser revisar y firmar. No reconstruir tres meses de movimientos en dos noches.'],
      ['h2', 'Última semana: lo que sí o sí va'],
      ['ul', [
        'Provisión de impuestos (IVA, Ingresos Brutos, Ganancias).',
        'Devengamiento de sueldos y cargas sociales.',
        'Amortizaciones del trimestre.',
        'Ajustes por inflación si aplican.',
        'Revisión de saldos atípicos en cuentas patrimoniales.',
      ]],
      ['h2', 'Errores recurrentes'],
      ['p', 'El error más común es no separar contablemente la operación del propietario. Si retirás plata para uso personal y no lo registrás como retiro/dividendo, tu balance miente y vas a tener problemas más adelante. Llevá la caja del dueño separada desde el día uno.'],
    ],
  },
  '7-indicadores-pyme': {
    slug: '7-indicadores-pyme',
    date: '21 abril 2026',
    readTime: '5 min',
    tag: 'Crecimiento',
    title: '7 indicadores para entender la salud de tu negocio',
    deck: 'Más allá del facturado: margen bruto, días de stock, ciclo de cobro y otros números que te dicen si tu PyME está creciendo bien —o tapando agujeros.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80',
    author: { name: 'Mariela Rocha', role: 'Consultora PyME · Rosario' },
    body: [
      ['p', 'Facturar mucho no significa ganar. Estos siete indicadores te muestran lo que realmente está pasando en tu negocio, en menos de cinco minutos por mes.'],
      ['h2', '1. Margen bruto por producto'],
      ['p', 'Precio de venta menos costo directo, sobre precio de venta. Si vendés muchos productos, calculalo por familia. Un margen bruto cayendo mes a mes es la primera señal de que tu negocio se está erosionando.'],
      ['h2', '2. Días de stock'],
      ['p', 'Cuántos días te dura el inventario al ritmo de venta actual. Mucho stock = plata dormida. Poco stock = roturas y clientes perdidos. El punto justo depende de tu rubro.'],
      ['h2', '3. Ciclo de cobro (DSO)'],
      ['p', 'Cuántos días promedio tardás en cobrar una factura. Si vendés a 30 días pero cobrás a 55, tenés un problema de financiamiento gratis al cliente. Cada día de DSO es plata que falta en tu caja.'],
      ['h2', '4. Ciclo de pago a proveedores'],
      ['p', 'El espejo del anterior. Si pagás a 15 días pero cobrás a 55, financiás 40 días con plata propia. Negociar pagos a 30/45 días con proveedores es de las mejores inversiones de tiempo que podés hacer.'],
      ['quote', 'No es lo mismo facturar $10 millones cobrando a 30 días que cobrando a 90. El segundo escenario te puede fundir.'],
      ['h2', '5. Punto de equilibrio mensual'],
      ['p', 'Cuánto tenés que facturar para cubrir todos los costos fijos. Sabelo de memoria. Si en el día 20 del mes ya pasaste el punto de equilibrio, sabés que el resto es ganancia.'],
      ['h2', '6. Concentración de clientes'],
      ['p', 'Qué porcentaje de tu facturación viene del cliente más grande. Si es más del 30%, estás en zona de riesgo. Si uno se va, te llevás un susto enorme.'],
      ['h2', '7. Caja proyectada a 60 días'],
      ['p', 'Sumando cobros esperados, restando pagos comprometidos. Te dice si vas a tener plata para pagar sueldos en dos meses. Mucho más útil que el balance histórico.'],
    ],
  },
  'monotributo-2026': {
    slug: 'monotributo-2026',
    date: '15 abril 2026',
    readTime: '4 min',
    tag: 'Impuestos',
    title: 'Monotributo 2026: nuevas escalas y cuándo conviene pasar a RI',
    deck: 'Las nuevas escalas dan aire, pero también suben los montos. Calculá si te conviene quedarte en Monotributo o saltar al Régimen General antes de fin de año.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    author: { name: 'Federico Iturralde', role: 'Asesor Tributario · Córdoba' },
    body: [
      ['p', 'Con las escalas actualizadas, muchos monotributistas pueden quedarse un año más sin saltar a Responsable Inscripto. Pero "poder" no es lo mismo que "convenir". Veamos cuándo conviene cada uno.'],
      ['h2', 'Cuándo conviene seguir en Monotributo'],
      ['ul', [
        'Vendés mayormente a consumidor final.',
        'Tu margen es alto y los gastos con IVA son bajos.',
        'No tenés empleados o tenés muy pocos.',
        'Querés simplicidad operativa por sobre optimización fiscal.',
      ]],
      ['h2', 'Cuándo conviene pasar a Responsable Inscripto'],
      ['ul', [
        'Vendés a empresas que necesitan factura A para descargar IVA.',
        'Tenés compras importantes con IVA que hoy no podés descontar.',
        'Estás cerca del tope de facturación y vas a saltar igual.',
        'Querés acceso a créditos bancarios con balance formal.',
      ]],
      ['quote', 'Llegar al tope y caer "de prepo" en RI es peor que pasar voluntariamente con tiempo de armar bien la transición.'],
      ['h2', 'La transición'],
      ['p', 'Si decidís pasar, planificá con al menos dos meses de anticipación. Tenés que dar de alta IVA, configurar facturación A, avisar a clientes y proveedores, y ajustar precios para no perder margen por el IVA que ahora tenés que facturar.'],
    ],
  },
  'mercado-pago-conciliacion': {
    slug: 'mercado-pago-conciliacion',
    date: '02 abril 2026',
    readTime: '6 min',
    tag: 'Cobros',
    title: 'Mercado Pago: cómo automatizar la conciliación bancaria',
    deck: 'Si cobrás por Mercado Pago, te explicamos cómo cerrar caja todos los días en 3 minutos en vez de 30, con conciliación automática contra tu banco.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80',
    author: { name: 'Ana Cardozo', role: 'Operaciones · PymeStudio' },
    body: [
      ['p', 'Conciliar Mercado Pago a mano es uno de los trabajos más tediosos de una PyME. Lo bueno es que ya casi nadie lo hace así. Te contamos cómo automatizar el proceso de punta a punta.'],
      ['h2', 'El problema'],
      ['p', 'Mercado Pago te muestra los cobros brutos. El banco recibe los netos, descontando comisión y retenciones impositivas. Si no atás cabos, te falta plata cada día que no cuadrás —y a fin de mes terminás con un saldo que no entendés.'],
      ['h2', 'La solución'],
      ['ul', [
        'Conectá Mercado Pago a tu sistema con la API oficial.',
        'Cada cobro genera automáticamente: ingreso de caja + retenciones a recuperar + asiento bancario.',
        'Cuando entra la liquidación al banco, el sistema cruza el monto neto contra los cobros del día y los marca como conciliados.',
      ]],
      ['quote', 'En PymeStudio, este proceso lo hacemos automático. Vos sólo abrís la pantalla y firmás las diferencias.'],
      ['h2', 'Errores típicos'],
      ['p', 'El más común es no separar comisiones de Mercado Pago como un gasto financiero. Eso te infla los ingresos y te deforma el margen. Configurá una cuenta específica desde el día uno.'],
    ],
  },
  'stock-multi-deposito': {
    slug: 'stock-multi-deposito',
    date: '20 marzo 2026',
    readTime: '7 min',
    tag: 'Operaciones',
    title: 'Stock multi-depósito sin que se te escape un tornillo',
    deck: 'Tres reglas simples para mantener inventario real en varios depósitos, con conteos cíclicos en vez de inventarios totales que paralizan la operación.',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80',
    author: { name: 'Hernán Lopata', role: 'Logística · Distribuidora Norte' },
    body: [
      ['p', 'El inventario total semestral es una tortura que casi nunca refleja la realidad. Después de tres días contando, las diferencias acumuladas son tan grandes que el resultado pierde valor. Hay una mejor forma: conteos cíclicos.'],
      ['h2', 'Regla 1: clasificá ABC'],
      ['p', 'No todos los productos importan igual. Tu 20% top de productos representa el 80% del valor del stock. Esos son los A. Los contás todos los meses. Los B (próximo 30%) cada trimestre. Los C, una vez por año.'],
      ['h2', 'Regla 2: conteo cíclico continuo'],
      ['p', 'En vez de parar la operación 3 días, contás 5 SKUs por día. Al fin del mes contaste 100 productos sin que nadie se entere. Las diferencias se ajustan al momento, mientras todavía sabés qué pasó.'],
      ['h2', 'Regla 3: movimientos entre depósitos = remito'],
      ['p', 'Toda transferencia entre depósitos debe generar un remito interno con quién lo retiró, quién lo recibió y firma de ambos. El 80% de las diferencias de stock vienen de transferencias mal registradas.'],
      ['quote', 'Inventario real no es contar más. Es contar mejor, y registrar todo movimiento al instante.'],
      ['h2', 'Y el sistema'],
      ['p', 'Necesitás un sistema que te muestre stock por depósito en tiempo real, no consolidado. Si tu software te dice "tenés 50 unidades" pero no sabés en qué depósito están, ya estás perdiendo.'],
    ],
  },
};

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug') || 'arca-guia-pymes';
}

function PostBody({ blocks }) {
  return (
    <div className="post-body">
      {blocks.map((b, i) => {
        const [kind, content] = b;
        if (kind === 'p') return <p key={i}>{content}</p>;
        if (kind === 'h2') return <h2 key={i}>{content}</h2>;
        if (kind === 'h3') return <h3 key={i}>{content}</h3>;
        if (kind === 'quote') return (
          <blockquote key={i} className="post-quote">"{content}"</blockquote>
        );
        if (kind === 'ul') return (
          <ul key={i}>
            {content.map((li, j) => <li key={j}>{li}</li>)}
          </ul>
        );
        return null;
      })}
    </div>
  );
}

function PostApp() {
  const [scrolled, setScrolled] = useStateBP(false);
  const [menuOpen, setMenuOpen] = useStateBP(false);
  const slug = getSlug();
  const post = POST_BODIES[slug] || POST_BODIES['arca-guia-pymes'];

  useEffectBP(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffectBP(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffectBP(() => {
    document.title = `${post.title} — PymeStudio Blog`;
  }, [post.title]);

  // related: other posts from same tag, excl. current
  const related = Object.values(POST_BODIES).filter(p => p.tag === post.tag && p.slug !== post.slug).slice(0, 3);
  const fallbackRelated = Object.values(POST_BODIES).filter(p => p.slug !== post.slug).slice(0, 3);
  const showRelated = related.length > 0 ? related : fallbackRelated;

  return (
    <React.Fragment>
      <Nav onOpenMenu={() => setMenuOpen(true)} scrolled={scrolled} />
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        {/* Article header */}
        <article>
          <section style={{padding:'140px 0 40px'}}>
            <div className="container" style={{maxWidth:780}}>
              <a href="blog.html" className="post-back">
                ← Volver al blog
              </a>
              <div className="post-meta-row">
                <span className="chip">{post.tag}</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} de lectura</span>
              </div>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-deck">{post.deck}</p>
              <div className="post-author">
                <div className="post-author__avatar">{post.author.name.split(' ').map(s => s[0]).join('')}</div>
                <div>
                  <div className="post-author__name">{post.author.name}</div>
                  <div className="post-author__role">{post.author.role}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Hero image */}
          <section style={{paddingBottom:48}}>
            <div className="container" style={{maxWidth:1080}}>
              <div className="post-hero-img" style={{backgroundImage:`url(${post.img})`}}/>
            </div>
          </section>

          {/* Body */}
          <section style={{paddingBottom:96}}>
            <div className="container" style={{maxWidth:720}}>
              <PostBody blocks={post.body}/>
            </div>
          </section>

          {/* Share + CTA */}
          <section style={{paddingBottom:96}}>
            <div className="container" style={{maxWidth:720}}>
              <div className="post-cta">
                <div>
                  <div className="eyebrow">Probá PymeStudio</div>
                  <h3 style={{fontSize:28, marginTop:10, letterSpacing:'-0.02em'}}>
                    Llevá tu PyME con la prolijidad de este artículo, <em style={{fontFamily:'var(--font-serif)', fontStyle:'italic'}}>en la práctica.</em>
                  </h3>
                </div>
                <a href="index.html#precios" className="btn btn--primary" style={{whiteSpace:'nowrap'}}>
                  Probar 14 días gratis <IconArrowRight size={16}/>
                </a>
              </div>
            </div>
          </section>
        </article>

        {/* Related */}
        <section style={{paddingBottom:120}}>
          <div className="container">
            <div className="section-head reveal" style={{maxWidth:'none', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', gap:32, flexWrap:'wrap'}}>
              <div>
                <span className="eyebrow">Seguí leyendo</span>
                <h2 className="section-title" style={{fontSize:'clamp(28px, 4vw, 44px)'}}>Más sobre <em>{post.tag.toLowerCase()}</em>.</h2>
              </div>
              <a href="blog.html" className="btn btn--ghost">Ir al blog <IconArrowUpRight size={16}/></a>
            </div>
            <div className="blog-grid reveal" style={{gridTemplateColumns:'repeat(3, 1fr)'}}>
              {showRelated.map((p) => (
                <a className="post" key={p.slug} href={`blog-post.html?slug=${p.slug}`}>
                  <div className="post__img" style={{backgroundImage:`url(${p.img})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
                  <div className="post__meta">
                    <span style={{color:'var(--accent)', fontWeight:500}}>{p.tag}</span>
                    <span> · {p.date} · {p.readTime}</span>
                  </div>
                  <h3 className="post__title">{p.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PostApp/>);
