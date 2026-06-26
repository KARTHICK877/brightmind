import { useState } from "react";
import { school, dosAndDonts, admissionDocs, feeSchedule, uniform, brunchMenu, lunchMenu } from "../data/content";
import Reveal from "../components/Reveal";

export default function Admission() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ parent: "", child: "", phone: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    const body = `Parent: ${form.parent}%0AChild: ${form.child}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.location.href =
      `mailto:${school.email}?subject=Admission Enquiry&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <Reveal><span className="eyebrow center">Admission & Visiting</span></Reveal>
          <Reveal delay={80}><h1>Join the Bright Mind family</h1></Reveal>
          <Reveal delay={160}>
            <p>
              We'd love to show you around. Send an enquiry below, and have a look at our
              simple guidelines that help children settle happily.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <Reveal variant="left">
            <span className="eyebrow">Enquire</span>
            <h2 style={{ marginBottom: 18 }}>Book a visit</h2>
            <div className="field">
              <label htmlFor="parent">Parent's name</label>
              <input id="parent" value={form.parent} onChange={set("parent")} placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="child">Child's name & age</label>
              <input id="child" value={form.child} onChange={set("child")} placeholder="e.g. Aarav, 3 years" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" value={form.phone} onChange={set("phone")} placeholder="Mobile number" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" value={form.message} onChange={set("message")}
                placeholder="When would you like to visit?" />
            </div>
            <button className="btn btn-primary" onClick={submit}>Send enquiry</button>
            {sent && (
              <p style={{ marginTop: 12, color: "var(--leaf)", fontWeight: 700 }}>
                Opening your email app to send — thank you!
              </p>
            )}
          </Reveal>

          <Reveal variant="right" delay={120}>
            <span className="eyebrow">Reach us</span>
            <h2 style={{ marginBottom: 18 }}>School details</h2>
            <div className="info-row">
              <div className="ic">📍</div>
              <div>
                <b>Address</b>
                <span>
                  {school.address.line1}<br />
                  {school.address.line2}<br />
                  {school.address.line3}
                </span>
              </div>
            </div>
            <div className="info-row">
              <div className="ic">📞</div>
              <div><b>School / Admissions</b>
                <span><a href="tel:04172232377">04172-232377</a> &nbsp;|&nbsp; <a href="tel:9894413768">9894413768</a></span>
              </div>
            </div>
            <div className="info-row">
              <div className="ic">🚌</div>
              <div><b>Transport</b>
                <span><a href="tel:9894158843">9894158843</a> &nbsp;|&nbsp; <a href="tel:9629148948">9629148948</a></span>
              </div>
            </div>
            <div className="info-row">
              <div className="ic">📋</div>
              <div><b>Academic Incharge</b>
                <span><a href="tel:9894158843">9894158843</a></span>
              </div>
            </div>
            <div className="info-row">
              <div className="ic">✉️</div>
              <div><b>Email</b><span><a href={`mailto:${school.email}`}>{school.email}</a></span></div>
            </div>
            <div className="info-row">
              <div className="ic">🕘</div>
              <div><b>Office hours</b><span>Mon – Fri, 9:00 am – 4:00 pm</span></div>
            </div>
            <div className="info-row">
              <div className="ic">📅</div>
              <div><b>Visitor hours (Teachers)</b><span>2nd & 3rd Saturday, 10:00 am – 12:00 pm (prior appointment)</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">Parent Guide</span></Reveal>
          <Reveal delay={80}><h2>Dos & Don'ts</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">
              A few shared habits between home and school help every child feel secure and
              settle faster.
            </p>
          </Reveal>
          <div className="grid g3" style={{ marginTop: 30 }}>
            {dosAndDonts.map((d, i) => (
              <Reveal key={d.title} variant="up" delay={(i % 3) * 120} className="card">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Fee schedule */}
      <section className="section">
        <div className="wrap">
          <div className="grid g2" style={{ alignItems: "start" }}>
            <Reveal variant="left">
              <span className="eyebrow">At the time of admission</span>
              <h2 style={{ marginBottom: 16 }}>Documents to bring</h2>
              <ul className="check">
                {admissionDocs.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <span className="eyebrow">Fees</span>
              <h2 style={{ marginBottom: 16 }}>Payment schedule</h2>
              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <table className="tbl">
                  <thead>
                    <tr><th>Term</th><th>Payment date</th><th>Last date</th></tr>
                  </thead>
                  <tbody>
                    {feeSchedule.map((f) => (
                      <tr key={f.term}>
                        <td>{f.term}</td><td>{f.date}</td><td>{f.last}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", marginTop: 10 }}>
                Kindly remit fees on time to avoid late charges. School and transport fees
                follow the same schedule.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Uniform */}
      <section className="section band">
        <div className="wrap">
          <Reveal><span className="eyebrow">Student's corner</span></Reveal>
          <Reveal delay={80}><h2>Uniform & grooming</h2></Reveal>
          <ul className="check" style={{ marginTop: 24, maxWidth: "70ch" }}>
            {uniform.map((u, i) => (
              <Reveal key={u} as="li" variant="up" delay={i * 80}>{u}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Menus */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Food chart</span></Reveal>
          <Reveal delay={80}><h2>Brunch & lunch ideas</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">A balanced weekly guide — send healthy, nutritious food and avoid junk.</p>
          </Reveal>
          <div className="grid g2" style={{ marginTop: 26, alignItems: "start" }}>
            <Reveal variant="left" className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div className="tbl-cap">🥛 Brunch menu</div>
              <table className="tbl">
                <thead><tr><th>Day</th><th>Liquid</th><th>Solid</th></tr></thead>
                <tbody>
                  {brunchMenu.map((m) => (
                    <tr key={m.day}><td>{m.day}</td><td>{m.liquid}</td><td>{m.solid}</td></tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal variant="right" delay={120} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div className="tbl-cap">🍱 Lunch menu</div>
              <table className="tbl">
                <thead><tr><th>Day</th><th>Menu</th></tr></thead>
                <tbody>
                  {lunchMenu.map((m) => (
                    <tr key={m.day}><td>{m.day}</td><td>{m.menu}</td></tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
