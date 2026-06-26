import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { school } from "../data/content";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/admission", label: "Admission" },
  { to: "/child-guidance", label: "Child Guidance", cga: true },
];

const logo = (n) => `${import.meta.env.BASE_URL}images/logos/${n}`;

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="kicker">
        ✦ Trusted by Walajapet families since {school.established} &nbsp;•&nbsp; Admissions open ✦
      </div>

      <header className="site">
        <div className="wrap nav">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={logo("brightmind.png")} alt={`${school.name} logo`} />
            <span className="bn">
              Bright Mind
              <small>Kids Academy</small>
            </span>
          </Link>

          <nav className={`navlinks ${open ? "open" : ""}`}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={l.cga ? "cga" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="navtoggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </header>

      <main key={pathname} className="page-enter">{children}</main>

      <footer className="site">
        <div className="wrap fgrid">
          <div>
            <div className="fbrand">
              <img src={logo("brightmind.png")} alt={`${school.name} logo`} />
              <div>
                <h4 style={{ marginBottom: 2 }}>{school.name}</h4>
                <span style={{ color: "var(--sun)", fontSize: ".85rem" }}>
                  {school.tagline}
                </span>
              </div>
            </div>
            <p>{school.address.line1}</p>
            <p>{school.address.line2}</p>
            <p>{school.address.line3}</p>
          </div>

          <div>
            <h4>Explore</h4>
            {links.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </div>

          <div>
            <h4>Contact & Help Desk</h4>
            <a href="tel:04172232377">📞 04172-232377 (School)</a>
            <a href="tel:9894413768">📞 9894413768 (Admissions)</a>
            <a href="tel:9629148948">📞 9629148948 (Transport)</a>
            <a href="tel:9894158843">📞 9894158843 (Academic)</a>
            <a href={`mailto:${school.email}`}>✉️ {school.email}</a>
            <p style={{marginTop:10,fontWeight:700,color:"var(--sun)"}}>Follow us</p>
            <a href="https://www.youtube.com/@brightmindkidsacademy" target="_blank" rel="noreferrer">▶ YouTube</a>
            <a href="https://www.facebook.com/brightmindkidsacademy" target="_blank" rel="noreferrer">📘 Facebook</a>
            <a href="https://www.instagram.com/brightmindkidsacademy" target="_blank" rel="noreferrer">📷 Instagram</a>
          </div>
        </div>
        <div className="wrap fbar">
          <span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
          <span>"We are the Bright Mind Kids — we are the joyful kids!" 🎵</span>
        </div>
      </footer>
    </>
  );
}
