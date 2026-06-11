/* ============================================================
   App principal — Portafolio Alex Enriquez Vera
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "status": "available",
  "fontPair": "geist",
  "logoStyle": "ae",
  "customCursor": true
}/*EDITMODE-END*/;

/* Starfield estático de fondo (muy sutil, no animado) */
function StaticStarfield() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    function paint() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const W = window.innerWidth, H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      // semilla determinista para que no "salte" al redimensionar
      let seed = 42;
      const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      const n = Math.round((W * H) / 14000);
      for (let i = 0; i < n; i++) {
        const x = rnd() * W, y = rnd() * H;
        const r = rnd() * 1.1 + 0.2;
        const a = rnd() * 0.5 + 0.08;
        ctx.fillStyle = 'rgba(170,196,221,' + a + ')';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    paint();
    window.addEventListener('resize', paint);
    return () => window.removeEventListener('resize', paint);
  }, []);
  return <canvas id="starfield-bg" ref={ref} aria-hidden="true"></canvas>;
}

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const reducedMotion = useReducedMotion();

  // ----- Idioma -----
  const [lang, setLangState] = React.useState(() => {
    const saved = localStorage.getItem('ae_lang');
    if (saved === 'es' || saved === 'en') return saved;
    return (navigator.language || 'es').startsWith('es') ? 'es' : 'en';
  });
  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('ae_lang', l);
    document.documentElement.lang = l;
  };
  React.useEffect(() => { document.documentElement.lang = lang; }, []);

  // ----- Tipografía (tweak) -----
  React.useEffect(() => {
    document.documentElement.setAttribute('data-font', tw.fontPair === 'inter' ? 'inter' : 'geist');
  }, [tw.fontPair]);

  // ----- Filtros -----
  const [skillFilter, setSkillFilter] = React.useState('all');
  const [projectFilter, setProjectFilter] = React.useState('all');
  const [techFilter, setTechFilter] = React.useState(null); // {id, name}

  // ----- Modal -----
  const [openProject, setOpenProject] = React.useState(null);

  // ----- Boot replay (tweak button) -----
  const [bootToken, setBootToken] = React.useState(0);

  // ----- Sección activa -----
  const [activeSection, setActiveSection] = React.useState('inicio');
  React.useEffect(() => {
    function onScroll() {
      let current = 'inicio';
      window.NAV_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      });
      setActiveSection(current);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ----- Hash directo a case study (#proyecto-id) -----
  React.useEffect(() => {
    const m = window.location.hash.match(/^#proyecto-(.+)$/);
    if (m && window.PROJECTS.some((p) => p.id === m[1])) setOpenProject(m[1]);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  };

  // click en estrella de la constelación → filtra proyectos
  const onStarClick = (star) => {
    setTechFilter({ id: star.id, name: star.name });
    setProjectFilter('all');
    scrollTo('proyectos');
  };

  // click en planeta del hero → destaca en habilidades
  const onPlanetClick = (techId) => {
    const star = window.SKILLS.find((s) => s.id === techId);
    if (star) setSkillFilter(star.cat);
    scrollTo('habilidades');
  };

  // navegación entre case studies (dentro del filtro activo)
  const navigateProject = (dir) => {
    const list = window.PROJECTS;
    const idx = list.findIndex((p) => p.id === openProject);
    if (idx === -1) return;
    const next = (idx + dir + list.length) % list.length;
    setOpenProject(list[next].id);
  };

  const t = window.I18N[lang];

  return (
    <React.Fragment>
      <a className="skip-link" href="#sobre">{t.skipLink}</a>
      <div className="nebula-bg" aria-hidden="true"></div>
      <StaticStarfield />
      <BootSequence lang={lang} replayToken={bootToken} onDone={() => {}} />
      <CustomCursor enabled={tw.customCursor} />
      <Header lang={lang} setLang={setLang} status={tw.status} activeSection={activeSection} logoStyle={tw.logoStyle} />
      <main id="main">
        <Hero lang={lang} status={tw.status} onPlanetClick={onPlanetClick} reducedMotion={reducedMotion} />
        <About lang={lang} />
        <SkillsSection lang={lang} filter={skillFilter} setFilter={setSkillFilter} onStarClick={onStarClick} reducedMotion={reducedMotion} />
        <ProjectsSection
          lang={lang}
          filter={projectFilter}
          setFilter={(f) => { setProjectFilter(f); setTechFilter(null); }}
          techFilter={techFilter}
          clearTechFilter={() => setTechFilter(null)}
          onOpen={setOpenProject}
        />
        <ExperienceSection lang={lang} />
        <ProcessSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      {openProject && (
        <CaseStudyModal
          lang={lang}
          projectId={openProject}
          onClose={() => setOpenProject(null)}
          onNavigate={navigateProject}
        />
      )}

      <TweaksPanel>
        <TweakSection label={lang === 'es' ? 'Identidad' : 'Identity'} />
        <TweakRadio
          label="Logo"
          value={tw.logoStyle}
          options={[{ value: 'ae', label: '[AE]' }, { value: 'nombre', label: 'Alex_Enriquez' }]}
          onChange={(v) => setTweak('logoStyle', v)}
        />
        <TweakRadio
          label={lang === 'es' ? 'Tipografía' : 'Typography'}
          value={tw.fontPair}
          options={[{ value: 'geist', label: 'Geist' }, { value: 'inter', label: 'Inter + JB Mono' }]}
          onChange={(v) => setTweak('fontPair', v)}
        />
        <TweakSection label={lang === 'es' ? 'Comportamiento' : 'Behavior'} />
        <TweakSelect
          label="Status"
          value={tw.status}
          options={[
            { value: 'available', label: lang === 'es' ? 'Disponible' : 'Available' },
            { value: 'limited', label: lang === 'es' ? 'Capacidad limitada' : 'Limited capacity' },
            { value: 'closed', label: lang === 'es' ? 'No tomando proyectos' : 'Not taking projects' }
          ]}
          onChange={(v) => setTweak('status', v)}
        />
        <TweakToggle
          label={lang === 'es' ? 'Cursor custom' : 'Custom cursor'}
          value={tw.customCursor}
          onChange={(v) => setTweak('customCursor', v)}
        />
        <TweakButton
          label={lang === 'es' ? 'Repetir boot sequence' : 'Replay boot sequence'}
          onClick={() => setBootToken((n) => n + 1)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
