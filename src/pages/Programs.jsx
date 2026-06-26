import { programs, learningModes, methodology, signatureEvents, timings, officeHours } from "../data/content";
import Reveal from "../components/Reveal";

export default function Programs() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <Reveal><span className="eyebrow center">Curriculum</span></Reveal>
          <Reveal delay={80}><h1>A structured four-year journey</h1></Reveal>
          <Reveal delay={160}>
            <p>
              No activity is meaningless — each one has a clear objective and outcome for
              the child, across physical, intellectual, language, creative and
              socio-emotional development.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Age Groups</span></Reveal>
          <Reveal delay={80}><h2>Programs by stage</h2></Reveal>
          <div className="grid g2" style={{ marginTop: 30 }}>
            {programs.map((p, i) => (
              <Reveal key={p.age} variant={i === 0 ? "left" : "right"} delay={i * 120} className="card prog">
                <span className="age">{p.age}</span>
                <h3>{p.title}</h3>
                <ul className="check" style={{ marginTop: 10 }}>
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">In the classroom</span></Reveal>
          <Reveal delay={80}><h2>How children learn here</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">
              Appropriate stimulus is the key to early learning, so every activity is
              designed with the child in mind — always with a sense of direction.
            </p>
          </Reveal>
          <div className="tagrow" style={{ marginTop: 22 }}>
            {learningModes.map((m, i) => (
              <Reveal key={m} as="span" variant="zoom" delay={i * 60} className="tag-pill">{m}</Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Methodology</span></Reveal>
          <Reveal delay={80}><h2>Principles we run on</h2></Reveal>
          <div className="tagrow" style={{ marginTop: 22 }}>
            {methodology.map((m, i) => (
              <Reveal key={m} as="span" variant="zoom" delay={i * 50} className="tag-pill">{m}</Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={120} className="card" style={{ marginTop: 40, maxWidth: "75ch" }}>
            <span className="tag">Assessment</span>
            <h3>Continuous, not one-off</h3>
            <p>
              Development in the early years happens at a phenomenal speed, so assessment
              is an ongoing process. Constant observation keeps teachers fully in tune with
              each child's progress — so we can keep them challenged and never bored, and
              share updates with parents regularly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signature events */}
      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">Astonishing events</span></Reveal>
          <Reveal delay={80}><h2>What makes a year at Bright Mind</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">
              Learning doesn't stop at the classroom. These are the moments our children
              look forward to all year.
            </p>
          </Reveal>
          <div className="grid g4" style={{ marginTop: 30 }}>
            {signatureEvents.map((e, i) => (
              <Reveal key={e.title} variant="up" delay={(i % 4) * 110} className="card">
                <div className="ic">{e.ic}</div>
                <h3 style={{ fontSize: "1.1rem" }}>{e.title}</h3>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* School timings */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">A day at school</span></Reveal>
          <Reveal delay={80}><h2>School timings</h2></Reveal>
          <div className="grid g2" style={{ marginTop: 26, alignItems: "start" }}>
            <Reveal variant="left" className="card">
              {timings.map((t) => (
                <div key={t.label} className="time-row">
                  <span className="time-label">{t.label}</span>
                  <span className="time-value">{t.value}</span>
                </div>
              ))}
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="card">
                <div className="ic">🕘</div>
                <h3>Office hours</h3>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>{officeHours}</p>
              </div>
              <div className="card" style={{ marginTop: 18 }}>
                <div className="ic">📅</div>
                <h3>Working days</h3>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>
                  Monday to Friday. Holidays on 1st &amp; 4th Saturdays and all Sundays.
                  For LKG &amp; UKG, timings change after the 1st term.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
