import { Link } from "react-router-dom";
import { school } from "../data/content";
import Reveal from "../components/Reveal";

const cgaLogo = `${import.meta.env.BASE_URL}images/logos/bmcga.jpeg`;

const pillars = [
  { ic: "🧠", title: "Unique Minds", text: "Every child learns differently. We start by understanding how each one thinks, feels and responds." },
  { ic: "🧩", title: "Structured Growth", text: "Clear, individual goals and a consistent, supportive routine that builds skills step by step." },
  { ic: "🚀", title: "Limitless Futures", text: "Confidence, independence and life skills — so each child can thrive well beyond the classroom." },
];

const supports = [
  "Individual, needs-based learning plans",
  "Sensory and fine-motor skill development",
  "Speech, language and communication support",
  "Social and emotional learning",
  "Daily observation and progress sharing with parents",
  "A calm, predictable, low-distraction environment",
];

export default function ChildGuidance() {
  return (
    <div className="cga-scope">
      <section className="cga-hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">A specialised program</span>
            <h1>
              Unique minds, <span className="hl">structured growth</span>, limitless futures.
            </h1>
            <p className="lead">
              The Child Guidance Academy is our dedicated program for children who learn
              and grow in their own way — meeting each child where they are, and walking
              with them, step by step.
            </p>
            <div className="hero-cta">
              <Link to="/admission" className="btn btn-primary">Talk to us</Link>
              <a href={`tel:${school.phone}`} className="btn btn-ghost">Call {school.phone}</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-panel" style={{ borderRadius: 30 }}>
              <img src={cgaLogo} alt="Bright Mind Child Guidance Academy logo" style={{ width: "78%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Our promise</span></Reveal>
          <Reveal delay={80}><h2>Three principles, one child at a time</h2></Reveal>
          <div className="grid g3" style={{ marginTop: 30 }}>
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 130} className="cga-card">
                <div className="ic">{p.ic}</div>
                <h3>{p.title}</h3>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cga-band">
        <div className="wrap">
          <div className="grid g2" style={{ alignItems: "start" }}>
            <Reveal variant="left">
              <span className="eyebrow">How we help</span>
              <h2>Support tailored to each child</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                We build a plan around the child — not the other way around — and keep
                parents close to every step of the journey.
              </p>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <ul className="check cga-check">
                {supports.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal variant="zoom" className="wrap" style={{ textAlign: "center" }}>
          <h2>Wondering if this is right for your child?</h2>
          <p className="lead" style={{ margin: "12px auto 24px" }}>
            Every child is welcome. Reach out and we'll arrange a gentle, no-pressure
            conversation about how we can help.
          </p>
          <Link to="/admission" className="btn btn-primary">Get in touch</Link>
        </Reveal>
      </section>
    </div>
  );
}
