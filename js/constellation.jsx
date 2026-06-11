/* ============================================================
   Constelación interactiva de habilidades (canvas 2D)
   Estrellas = tecnologías; líneas = stacks. Filtro por categoría,
   hover con tooltip, click filtra proyectos.
   ============================================================ */

const CONST_COLORS = {
  blue: '#5AA3D9',
  blueDim: 'rgba(90,163,217,',
  gold: '#F4B860',
  goldDim: 'rgba(244,184,96,',
  line: 'rgba(90,163,217,'
};

function Constellation({ lang, filter, onStarClick, reducedMotion }) {
  const wrapRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const [tooltip, setTooltip] = React.useState(null);
  const animRef = React.useRef({ stars: {}, hovered: null, raf: null, t: 0 });

  const t9n = window.I18N[lang].skills;

  // alpha objetivo por estrella según filtro
  const targetAlpha = (star) => {
    if (filter === 'all') return 1;
    return star.cat === filter ? 1 : 0.15;
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    const A = animRef.current;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    // estado de animación por estrella
    window.SKILLS.forEach((s) => {
      if (!A.stars[s.id]) A.stars[s.id] = { alpha: 1, scale: 1, twinkle: Math.random() * Math.PI * 2 };
    });

    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio, 2);
    function resize() {
      W = wrap.clientWidth; H = wrap.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const pad = { x: 70, y: 56 };
    const px = (s) => pad.x + s.x * (W - pad.x * 2);
    const py = (s) => pad.y + s.y * (H - pad.y * 2);

    function starAt(mx, my) {
      let best = null, bestD = 28;
      window.SKILLS.forEach((s) => {
        const d = Math.hypot(px(s) - mx, py(s) - my);
        if (d < bestD) { best = s; bestD = d; }
      });
      return best;
    }

    function showTooltip(s) {
      if (!s) { setTooltip(null); return; }
      const n = s.projects;
      const catLabels = window.I18N[lang].filters;
      const catKey = { web: 'web', apps: 'apps', games: 'games', xr: 'xr', tools: 'tools' }[s.cat];
      setTooltip({
        x: px(s), y: py(s) - 14 * s.size,
        name: s.name,
        meta: `${catLabels[catKey]} · ${n} ${n === 1 ? t9n.project : t9n.projects}`
      });
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      const s = starAt(e.clientX - r.left, e.clientY - r.top);
      if (s !== A.hovered) {
        A.hovered = s;
        canvas.style.cursor = s ? 'pointer' : '';
        showTooltip(s);
      } else if (s) {
        showTooltip(s); // reposicionar si hubo resize
      }
    }
    function onLeave() { A.hovered = null; setTooltip(null); canvas.style.cursor = ''; }
    function onClick(e) {
      const r = canvas.getBoundingClientRect();
      const s = starAt(e.clientX - r.left, e.clientY - r.top);
      if (!s) { if (isTouch) onLeave(); return; }
      if (isTouch && A.hovered !== s) {
        // primer tap: tooltip; segundo tap: filtrar
        A.hovered = s;
        showTooltip(s);
        return;
      }
      onStarClick && onStarClick(s);
    }
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('click', onClick);

    let running = true;
    const io = new IntersectionObserver(([en]) => { running = en.isIntersecting; });
    io.observe(wrap);

    const linkedTo = (id) => window.SKILL_LINKS
      .filter((l) => l[0] === id || l[1] === id)
      .map((l) => (l[0] === id ? l[1] : l[0]));

    function draw() {
      A.raf = requestAnimationFrame(draw);
      if (!running) return;
      if (!reducedMotion) A.t += 0.016;
      ctx.clearRect(0, 0, W, H);

      const byId = {};
      window.SKILLS.forEach((s) => { byId[s.id] = s; });

      // interpolar alphas / escalas
      window.SKILLS.forEach((s) => {
        const st = A.stars[s.id];
        const tA = targetAlpha(s) * (A.hovered && A.hovered !== s && !linkedTo(A.hovered.id).includes(s.id) ? 0.55 : 1);
        st.alpha += (tA - st.alpha) * 0.08;
        const tS = A.hovered === s ? 1.35 : 1;
        st.scale += (tS - st.scale) * 0.15;
      });

      // líneas de conexión
      window.SKILL_LINKS.forEach(([a, b]) => {
        const sa = byId[a], sb = byId[b];
        if (!sa || !sb) return;
        const stA = A.stars[a], stB = A.stars[b];
        let alpha = Math.min(stA.alpha, stB.alpha) * 0.22;
        if (filter !== 'all' && (sa.cat !== filter || sb.cat !== filter)) alpha *= 0.25;
        const isHL = A.hovered && (a === A.hovered.id || b === A.hovered.id);
        if (isHL) alpha = 0.65;
        ctx.strokeStyle = CONST_COLORS.line + alpha + ')';
        ctx.lineWidth = isHL ? 1.2 : 0.8;
        ctx.beginPath();
        ctx.moveTo(px(sa), py(sa));
        ctx.lineTo(px(sb), py(sb));
        ctx.stroke();
      });

      // estrellas
      window.SKILLS.forEach((s) => {
        const st = A.stars[s.id];
        const x = px(s), y = py(s);
        const tw = reducedMotion ? 1 : 0.85 + Math.sin(A.t * 1.3 + st.twinkle) * 0.15;
        const R = 4.2 * s.size * st.scale;
        const isGold = s.main;
        const base = isGold ? CONST_COLORS.goldDim : CONST_COLORS.blueDim;

        // glow
        const glowR = R * (A.hovered === s ? 5 : 3.2) * tw;
        const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
        g.addColorStop(0, base + 0.5 * st.alpha + ')');
        g.addColorStop(1, base + '0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fill();

        // núcleo
        ctx.fillStyle = isGold ? CONST_COLORS.gold : CONST_COLORS.blue;
        ctx.globalAlpha = st.alpha;
        ctx.beginPath();
        ctx.arc(x, y, R, 0, Math.PI * 2);
        ctx.fill();

        // destello en cruz (sutil, solo principales)
        if (isGold && st.alpha > 0.5) {
          ctx.strokeStyle = base + 0.35 * st.alpha + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x - R * 2.6, y); ctx.lineTo(x + R * 2.6, y);
          ctx.moveTo(x, y - R * 2.6); ctx.lineTo(x, y + R * 2.6);
          ctx.stroke();
        }

        // etiqueta mono
        ctx.font = '11.5px "Geist Mono", "JetBrains Mono", monospace';
        ctx.fillStyle = '#A7B0C0';
        ctx.textAlign = 'center';
        ctx.fillText(s.name, x, y + R + 17);
        ctx.globalAlpha = 1;
      });
    }
    draw();

    return () => {
      cancelAnimationFrame(A.raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('click', onClick);
    };
  }, [filter, lang, reducedMotion]);

  return (
    <div className="constellation-wrap" ref={wrapRef}>
      <canvas ref={canvasRef} aria-label="Constelación de tecnologías"></canvas>
      {tooltip && (
        <div className="const-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          <span>{tooltip.name}</span>
          <span className="tt-meta">{tooltip.meta}</span>
        </div>
      )}
      <span className="const-hint">{t9n.hint}</span>
    </div>
  );
}

window.Constellation = Constellation;
