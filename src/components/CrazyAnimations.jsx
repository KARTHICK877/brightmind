import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ── emojis that float up when you click anywhere ──
const FLOATERS = ["⭐","🎈","✨","🌟","🎉","🦋","🌈","💫","🎊","🏆","🚀","💥"];
const CONFETTI_COLORS = ["#F5952A","#FFD02A","#4DC46A","#6BA3F0","#F05040","#C07AFF","#FF8E3C"];

function rand(min, max) { return Math.random() * (max - min) + min; }

export default function CrazyAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ── SCROLL PROGRESS BAR ──────────────────────────────────────
    let bar = document.getElementById("scroll-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "scroll-bar";
      document.body.prepend(bar);
    }
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── CURSOR SPARKLE TRAIL ─────────────────────────────────────
    const onMove = (e) => {
      if (Math.random() > 0.35) return; // not every pixel
      const s = document.createElement("div");
      s.className = "sparkle";
      s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;
        background:${CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)]};
        width:${rand(6,14)}px;height:${rand(6,14)}px;`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 700);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // ── CLICK ANYWHERE: floating emoji + confetti burst ──────────
    const onClick = (e) => {
      // Skip clicks on interactive elements
      if (e.target.closest("a,button,input,textarea,select")) {
        spawnConfetti(e.clientX, e.clientY);
        return;
      }
      spawnParticle(e.clientX, e.clientY);
      spawnConfetti(e.clientX, e.clientY);
    };
    window.addEventListener("click", onClick);

    // ── 3D CARD TILT ON MOUSE MOVE ───────────────────────────────
    const cards = document.querySelectorAll(".card,.cga-card");
    const tilts = [];
    cards.forEach((card) => {
      const fn = (e) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -16;
        card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateZ(10px)`;
      };
      const out = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", fn);
      card.addEventListener("mouseleave", out);
      tilts.push({ card, fn, out });
    });

    // ── WAVE LETTERS on hero h1 ──────────────────────────────────
    // Done via CSS class — just mark the target word
    const heroHl = document.querySelector(".hero h1 .hl");
    if (heroHl && !heroHl.classList.contains("wave-word")) {
      heroHl.classList.add("wave-word");
      heroHl.innerHTML = [...heroHl.textContent].map(
        (ch) => ch === " " ? " " : `<span>${ch}</span>`
      ).join("");
    }

    // ── SPONTANEOUS FLOATING PARTICLES (random, ambient) ─────────
    const ambient = setInterval(() => {
      const x = rand(50, window.innerWidth - 50);
      const y = rand(window.scrollY + 100, window.scrollY + window.innerHeight - 100);
      spawnAmbientParticle(x, y);
    }, 1800);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      tilts.forEach(({ card, fn, out }) => {
        card.removeEventListener("mousemove", fn);
        card.removeEventListener("mouseleave", out);
        card.style.transform = "";
      });
      clearInterval(ambient);
    };
  }, [pathname]);

  return null;
}

// ── helpers ────────────────────────────────────────────────────

function spawnParticle(x, y) {
  const el = document.createElement("div");
  el.className = "particle";
  el.textContent = FLOATERS[Math.floor(Math.random() * FLOATERS.length)];
  el.style.cssText = `
    left:${x}px; top:${y}px;
    --tx:${rand(-60,60)}px;
    --ty:${rand(-160,-60)}px;
    --rot:${rand(-360,360)}deg;
    --dur:${rand(1.2,2.2)}s;
    font-size:${rand(1.2,2.2)}rem;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function spawnAmbientParticle(x, y) {
  const el = document.createElement("div");
  el.className = "particle";
  el.textContent = FLOATERS[Math.floor(Math.random() * FLOATERS.length)];
  el.style.cssText = `
    left:${x}px; top:${y}px;
    --tx:${rand(-40,40)}px;
    --ty:${rand(-100,-40)}px;
    --rot:${rand(-180,180)}deg;
    --dur:${rand(2,3.5)}s;
    font-size:${rand(0.9,1.6)}rem;
    opacity:0.6;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

function spawnConfetti(cx, cy) {
  for (let i = 0; i < 10; i++) {
    const el = document.createElement("div");
    el.className = "confetto";
    el.style.cssText = `
      left:${cx}px; top:${cy}px;
      background:${CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)]};
      border-radius:${Math.random()>.5?"50%":"3px"};
      width:${rand(6,12)}px; height:${rand(6,12)}px;
      --tx:${rand(-80,80)}px;
      --ty:${rand(-60,200)}px;
      --rot:${rand(180,900)}deg;
      --dur:${rand(1,2.2)}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }
}
