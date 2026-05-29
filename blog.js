// === Blog Index Page ======================================================
const { useState: useStateBlog, useEffect: useEffectBlog } = React;

const POSTS = [
  {
    slug: 'arca-guia-pymes',
    date: '12 mayo 2026',
    readTime: '6 min',
    tag: 'ARCA',
    title: 'Qué cambia con ARCA: la guía para PyMEs argentinas',
    excerpt: 'AFIP pasó a llamarse ARCA. Cambian formularios, certificados y plazos —pero no las obligaciones. Repasamos qué tenés que hacer hoy y qué podés dejar para más adelante.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=75',
    featured: true,
  },
  {
    slug: 'balance-trimestral',
    date: '04 mayo 2026',
    readTime: '8 min',
    tag: 'Contabilidad',
    title: 'Cómo cerrar tu balance trimestral sin pánico',
    excerpt: 'Un checklist práctico que usan estudios contables para cerrar trimestres sin pelearse con el contador. Spoiler: empieza el día 1 del trimestre, no el último.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=75',
  },
  {
    slug: '7-indicadores-pyme',
    date: '21 abril 2026',
    readTime: '5 min',
    tag: 'Crecimiento',
    title: '7 indicadores para entender la salud de tu negocio',
    excerpt: 'Más allá del facturado: margen bruto, días de stock, ciclo de cobro y otros números que te dicen si tu PyME está creciendo bien —o tapando agujeros.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=75',
  },
  {
    slug: 'monotributo-2026',
    date: '15 abril 2026',
    readTime: '4 min',
    tag: 'Impuestos',
    title: 'Monotributo 2026: nuevas escalas y cuándo conviene pasar a RI',
    excerpt: 'Las nuevas escalas dan aire, pero también suben los montos. Calculá si te conviene quedarte en Monotributo o saltar al Régimen General antes de fin de año.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=75',
  },
  {
    slug: 'mercado-pago-conciliacion',
    date: '02 abril 2026',
    readTime: '6 min',
    tag: 'Cobros',
    title: 'Mercado Pago: cómo automatizar la conciliación bancaria',
    excerpt: 'Si cobrás por Mercado Pago, te explicamos cómo cerrar caja todos los días en 3 minutos en vez de 30, con conciliación automática contra tu banco.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=75',
  },
  {
    slug: 'stock-multi-deposito',
    date: '20 marzo 2026',
    readTime: '7 min',
    tag: 'Operaciones',
    title: 'Stock multi-depósito sin que se te escape un tornillo',
    excerpt: 'Tres reglas simples para mantener inventario real en varios depósitos, con conteos cíclicos en vez de inventarios totales que paralizan la operación.',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=75',
  },
];

const CATEGORIES = [
  { key: 'todos', label: 'Todos' },
  { key: 'ARCA', label: 'ARCA' },
  { key: 'Contabilidad', label: 'Contabilidad' },
  { key: 'Impuestos', label: 'Impuestos' },
  { key: 'Cobros', label: 'Cobros' },
  { key: 'Crecimiento', label: 'Crecimiento' },
  { key: 'Operaciones', label: 'Operaciones' },
];

function BlogApp() {
  const [scrolled, setScrolled] = useStateBlog(false);
  const [menuOpen, setMenuOpen] = useStateBlog(false);
  const [cat, setCat] = useStateBlog('todos');

  useEffectBlog(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffectBlog(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const filtered = cat === 'todos' ? POSTS : POSTS.filter(p => p.tag === cat);
  const featured = POSTS.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured || cat !== 'todos');

  return (
    <React.Fragment>
      <Nav onOpenMenu={() => setMenuOpen(true)} scrolled={scrolled} />
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        {/* Header */}
        <section style={{padding:'140px 0 56px'}}>
          <div className="container">
            <span className="eyebrow">Blog · PymeStudio</span>
            <h1 className="hero__title" style={{fontSize:'clamp(48px, 7vw, 92px)', marginTop:18, maxWidth:'18ch'}}>
              Cómo llevar una PyME <em>argentina</em> con criterio.
            </h1>
            <p className="hero__sub" style={{maxWidth:'62ch', marginTop:22}}>
              Guías prácticas sobre facturación, impuestos, contabilidad y crecimiento.
              Escritas por contadores que trabajan con PyMEs todos los días.
            </p>
          </div>
        </section>

        {/* Featured */}
        {cat === 'todos' && featured && (
          <section style={{paddingTop:24, paddingBottom:64}}>
            <div className="container">
              <a href={`blog-post.html?slug=${featured.slug}`} className="blog-featured reveal">
                <div className="blog-featured__img" style={{backgroundImage:`url(${featured.img})`}}/>
                <div className="blog-featured__body">
                  <div className="blog-featured__meta">
                    <span className="chip">{featured.tag}</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime} de lectura</span>
                  </div>
                  <h2 className="blog-featured__title">{featured.title}</h2>
                  <p className="blog-featured__excerpt">{featured.excerpt}</p>
                  <span className="btn btn--ghost" style={{alignSelf:'flex-start', marginTop:8}}>
                    Leer artículo <IconArrowUpRight size={16}/>
                  </span>
                </div>
              </a>
            </div>
          </section>
        )}

        {/* Filter pills */}
        <section style={{paddingBottom:36}}>
          <div className="container">
            <div className="blog-filters reveal">
              {CATEGORIES.map(c => (
                <button
                  key={c.key}
                  className={"blog-filter" + (cat === c.key ? ' active' : '')}
                  onClick={() => setCat(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section style={{paddingTop:0, paddingBottom:120}}>
          <div className="container">
            <div className="blog-grid reveal" style={{gridTemplateColumns:'repeat(3, 1fr)'}}>
              {rest.map((p, i) => (
                <a className="post" key={p.slug} href={`blog-post.html?slug=${p.slug}`}>
                  <div className="post__img" style={{backgroundImage:`url(${p.img})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
                  <div className="post__meta">
                    <span style={{color:'var(--accent)', fontWeight:500}}>{p.tag}</span>
                    <span> · {p.date} · {p.readTime}</span>
                  </div>
                  <h3 className="post__title">{p.title}</h3>
                  <p style={{fontSize:14, color:'var(--muted)', marginTop:8, lineHeight:1.55}}>
                    {p.excerpt.length > 110 ? p.excerpt.slice(0, 110) + '…' : p.excerpt}
                  </p>
                </a>
              ))}
            </div>
            {filtered.length === 0 && (
              <p style={{textAlign:'center', padding:'80px 0', color:'var(--muted)'}}>
                Sin artículos en esta categoría todavía.
              </p>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section style={{paddingBottom:120}}>
          <div className="container">
            <div className="closing reveal" style={{gridTemplateColumns:'1.2fr 1fr'}}>
              <div>
                <span className="eyebrow">Newsletter</span>
                <h2 className="closing__title">Lo importante de ARCA <em>en tu inbox.</em></h2>
                <p className="closing__desc">
                  Una vez por mes, te mandamos lo que cambió en facturación, impuestos y
                  obligaciones —resumido para que lo leas en el café.
                </p>
                <form
                  onSubmit={(e) => { e.preventDefault(); alert('Listo. Te suscribimos al newsletter.'); }}
                  style={{display:'flex', gap:10, flexWrap:'wrap', maxWidth:520}}
                >
                  <input
                    type="email"
                    required
                    placeholder="tu@empresa.com.ar"
                    style={{
                      flex:'1 1 240px', padding:'14px 16px',
                      background:'rgba(244,239,230,.08)',
                      border:'1px solid rgba(244,239,230,.18)',
                      borderRadius:12, color:'#F4EFE6', fontSize:14,
                      fontFamily:'inherit', outline:'none',
                    }}
                  />
                  <button type="submit" className="btn btn--accent">
                    Suscribirme <IconArrowRight size={16}/>
                  </button>
                </form>
                <p style={{marginTop:16, fontSize:12.5, color:'rgba(244,239,230,.55)'}}>
                  Sin spam. Te das de baja con un click.
                </p>
              </div>
              <div className="closing__img">
                <image-slot id="blog-newsletter-img" shape="rounded" radius="22"
                  placeholder="Foto editorial / lifestyle"
                  style={{width:'100%', height:'100%', display:'block'}}>
                </image-slot>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogApp/>);
