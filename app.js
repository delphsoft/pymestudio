// === App ==================================================================
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "heroVariant": "split",
  "accent": "#C24A1F"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [scrolled, setScrolled] = useStateApp(false);
  const [menuOpen, setMenuOpen] = useStateApp(false);

  useReveal();

  // theme + accent applied to <html>
  useEffectApp(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
  }, [tweaks.theme]);

  useEffectApp(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    // derive a hover variant
    const lighter = tweaks.accent === '#C24A1F' ? '#E37449'
      : tweaks.accent === '#1E4538' ? '#2A6450'
      : tweaks.accent === '#5B4FE9' ? '#7B73F0'
      : tweaks.accent === '#1A1A1A' ? '#3A3A36'
      : tweaks.accent;
    document.documentElement.style.setProperty('--accent-2', lighter);
  }, [tweaks.accent]);

  // sticky nav scroll state
  useEffectApp(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffectApp(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <React.Fragment>
      <Nav onOpenMenu={() => setMenuOpen(true)} scrolled={scrolled} />
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero variant={tweaks.heroVariant}/>
        <Marquee/>
        <Stats/>
        <Modules/>
        <Dashboard/>
        <Steps/>
        <Testimonials/>
        <Pricing/>
        <Services/>
        <Blog/>
        <FAQ/>
        <Closing/>
      </main>

      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Apariencia">
          <TweakRadio
            label="Tema"
            value={tweaks.theme}
            options={[
              { value: 'light', label: 'Claro' },
              { value: 'dark',  label: 'Oscuro' },
            ]}
            onChange={(v) => setTweak('theme', v)}
          />
          <TweakColor
            label="Color de acento"
            value={tweaks.accent}
            options={['#C24A1F', '#1E4538', '#5B4FE9', '#1A1A1A']}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakSelect
            label="Variante"
            value={tweaks.heroVariant}
            options={[
              { value: 'split',     label: 'Split — copy + visual lateral' },
              { value: 'center',    label: 'Centrado — visual debajo' },
              { value: 'editorial', label: 'Editorial — título XL' },
            ]}
            onChange={(v) => setTweak('heroVariant', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
