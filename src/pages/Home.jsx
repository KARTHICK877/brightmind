import { Link } from "react-router-dom";
import { school, components, milestones, signatureEvents } from "../data/content";
import Reveal from "../components/Reveal";

const logo = `${import.meta.env.BASE_URL}images/logos/brightmind.png`;

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="ribbon">🎉 Celebrating our 10th year — est. {school.established}</span>
            <h1>
              A safe, joyful start to your child's <span className="hl">school journey</span>.
            </h1>
            <p className="lead">
              "{school.motto}" — guiding every child to grow at their own pace, with
              confidence, curiosity and purpose.
            </p>
            <div className="hero-cta">
              <Link to="/admission" className="btn btn-primary">Book a school visit</Link>
              <Link to="/gallery" className="btn btn-ghost">See our campus</Link>
            </div>
            <div className="hero-badges">
              {milestones.map((m) => (
                <div key={m.label}><b>{m.num}</b><span>{m.label}</span></div>
              ))}
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-panel">
              <img src={logo} alt={`${school.name} logo`} />
              <div className="panel-stats">
                <div><b>5</b><span>Dev. areas</span></div>
                <div><b>1:1</b><span>Material time</span></div>
                <div><b>Daily</b><span>Assessment</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto / Vision / Mission strip */}
      <section className="section band" style={{ padding: "48px 0" }}>
        <div className="wrap">
          <div className="grid g3">
            <Reveal variant="left" className="card" style={{ borderTop: "4px solid var(--orange)" }}>
              <div className="ic">🌟</div>
              <span className="tag">Our Motto</span>
              <p style={{ fontWeight: 700, color: "var(--head)", marginTop: 6 }}>"{school.motto}"</p>
            </Reveal>
            <Reveal variant="up" delay={120} className="card" style={{ borderTop: "4px solid var(--sky)" }}>
              <div className="ic">🔭</div>
              <span className="tag">Our Vision</span>
              <p style={{ marginTop: 6 }}>{school.vision}</p>
            </Reveal>
            <Reveal variant="right" delay={240} className="card" style={{ borderTop: "4px solid var(--leaf)" }}>
              <div className="ic">🚀</div>
              <span className="tag">Our Mission</span>
              <p style={{ marginTop: 6 }}>{school.mission}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">How we teach</span></Reveal>
          <Reveal delay={60}><h2><span className="glitch" data-text="Four parts, woven into one">Four parts, woven into one</span></h2></Reveal>
          <Reveal delay={120}>
            <p className="lead">
              Our philosophy drives the curriculum, the curriculum shapes the materials,
              and trained teachers bring it all together around the child.
            </p>
          </Reveal>
          <div className="grid g4" style={{ marginTop: 34 }}>
            {components.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 120} className="card">
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Events */}
      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">Life at BMKA</span></Reveal>
          <Reveal delay={80}><h2><span className="glitch" data-text="Our signature events">Our signature events</span></h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">Every event is a learning — and every child gets to shine.</p>
          </Reveal>
          <div className="grid g4" style={{ marginTop: 30 }}>
            {signatureEvents.map((e, i) => (
              <Reveal key={e.title} variant="up" delay={(i % 4) * 100} className="card">
                <div className="ic">{e.ic}</div>
                <h3 style={{ fontSize: "1.1rem" }}>{e.title}</h3>
                <p>{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-link cards */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Explore</span></Reveal>
          <Reveal delay={60}><h2>See more of Bright Mind</h2></Reveal>
          <div className="grid g3" style={{ marginTop: 26 }}>
            <Reveal variant="up" delay={0}>
              <Link to="/programs" className="card" style={{ display: "block" }}>
                <div className="ic">📚</div>
                <h3>Our Programs</h3>
                <p>Foundation (2–4) and Discovery (4–6) years — see what each covers.</p>
              </Link>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <Link to="/events" className="card" style={{ display: "block" }}>
                <div className="ic">🎉</div>
                <h3>Events & Celebrations</h3>
                <p>Little Spartans, Saarang Cosmos, Flair Hunt and 19 more moments.</p>
              </Link>
            </Reveal>
            <Reveal variant="up" delay={240}>
              <Link to="/child-guidance" className="card" style={{ display: "block" }}>
                <div className="ic">🌱</div>
                <h3>Child Guidance Academy</h3>
                <p>Specialised support for unique minds — structured growth, limitless futures.</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
