import { components, differentiators, school, values, sixPillars, board, advisoryCouncil } from "../data/content";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <Reveal><span className="eyebrow center">Our Approach</span></Reveal>
          <Reveal delay={80}><h1>Built around the child</h1></Reveal>
          <Reveal delay={160}>
            <p>
              A quality preschool program does more than art, music and play. It sets clear
              learning objectives and a structured way to reach them — because every child
              is special, different, and an individual in their own right.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Motto / Vision / Mission */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Who we are</span></Reveal>
          <Reveal delay={80}><h2><span className="glitch" data-text="Our motto, vision &amp; mission">Our motto, vision &amp; mission</span></h2></Reveal>
          <div className="grid g3" style={{ marginTop: 30 }}>
            <Reveal variant="up" delay={0} className="card">
              <div className="ic">🌟</div>
              <span className="tag">Motto</span>
              <p style={{ marginTop: 6, fontWeight: 700, color: "var(--head)" }}>“{school.motto}”</p>
            </Reveal>
            <Reveal variant="up" delay={120} className="card">
              <div className="ic">🔭</div>
              <span className="tag">Vision</span>
              <p style={{ marginTop: 6 }}>{school.vision}</p>
            </Reveal>
            <Reveal variant="up" delay={240} className="card">
              <div className="ic">🚀</div>
              <span className="tag">Mission</span>
              <p style={{ marginTop: 6 }}>{school.mission}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">The Philosophy</span></Reveal>
          <Reveal delay={80}><h2>Why early years matter</h2></Reveal>
          <div className="grid g2" style={{ marginTop: 24, alignItems: "start" }}>
            <Reveal variant="left">
              <p className="lead">
                Since {school.foundedDate}, our founder's vision has been to provide world-class
                early education with excellent infrastructure in a safe, child-supportive
                environment. We believe every child is unique and learns at their own pace —
                so we nurture curiosity, build confidence and celebrate small wins, because
                strong roots create mighty trees.
              </p>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <ul className="check">
                <li>Brain development is most rapid in the early years.</li>
                <li>About 75% of neural connectivity is complete by age 7.</li>
                <li>When stimulation is poor, development is seriously affected.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Four components */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">The Components</span></Reveal>
          <Reveal delay={80}><h2>Four parts, tightly integrated</h2></Reveal>
          <div className="grid g4" style={{ marginTop: 30 }}>
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

      {/* Six Pillars of Character */}
      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">Character</span></Reveal>
          <Reveal delay={80}><h2><span className="glitch" data-text="Six pillars of character">Six pillars of character</span></h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">The values we help every Bright Mind child grow up with.</p>
          </Reveal>
          <div className="grid g3" style={{ marginTop: 30 }}>
            {sixPillars.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={(i % 3) * 120} className="card">
                <div className="ic">{p.ic}</div>
                <h3>{p.title}</h3>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Our Values</span></Reveal>
          <Reveal delay={80}><h2>What we commit to</h2></Reveal>
          <ul className="check" style={{ marginTop: 24, maxWidth: "72ch" }}>
            {values.map((v, i) => (
              <Reveal key={v} as="li" variant="up" delay={i * 90}>{v}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">What sets us apart</span></Reveal>
          <Reveal delay={80}><h2>The Bright Mind difference</h2></Reveal>
          <ul className="check" style={{ marginTop: 24, maxWidth: "70ch" }}>
            {differentiators.map((d, i) => (
              <Reveal key={d} as="li" variant="up" delay={i * 70}>{d}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Board & Leadership */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Leadership</span></Reveal>
          <Reveal delay={80}><h2>Board & advisory council</h2></Reveal>
          <div className="grid g4" style={{ marginTop: 30 }}>
            {board.map((m, i) => (
              <Reveal key={m.role} variant="up" delay={(i % 4) * 110} className="card">
                <div className="ic">👤</div>
                <span className="tag">{m.role}</span>
                <h3 style={{ fontSize: "1.05rem", marginTop: 4 }}>{m.name}</h3>
              </Reveal>
            ))}
          </div>
          <div className="grid g3" style={{ marginTop: 22 }}>
            {advisoryCouncil.map((m, i) => (
              <Reveal key={m.name} variant="up" delay={(i % 3) * 110} className="card">
                <span className="tag">{m.note}</span>
                <h3 style={{ fontSize: "1.05rem", marginTop: 4 }}>{m.name}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
