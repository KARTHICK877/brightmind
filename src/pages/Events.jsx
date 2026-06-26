import { eventSections } from "../data/galleries";
import GalleryGrid from "../components/GalleryGrid";
import Reveal from "../components/Reveal";

const featured = eventSections.filter((e) => e.featured);
const regular  = eventSections.filter((e) => !e.featured);

export default function Events() {
  return (
    <>
      <section className="page-intro fun-intro">
        <div className="wrap">
          <Reveal><span className="eyebrow center">Events & Celebrations</span></Reveal>
          <Reveal delay={80}><h1><span className="glitch" data-text="Festivals, days out &amp; special moments 🎉">Festivals, days out &amp; special moments 🎉</span></h1></Reveal>
          <Reveal delay={160}>
            <p>
              Culture and celebration are part of how our children learn. Tap an event to
              jump to it — and tap any photo to see it big!
            </p>
          </Reveal>

          {/* Featured signature events */}
          <Reveal delay={200}>
            <div className="featured-pills">
              {featured.map((e) => (
                <a key={e.slug} href={`#${e.slug}`} className="feat-pill">
                  {e.emoji} {e.title}
                </a>
              ))}
            </div>
          </Reveal>

          {/* All other event jump-nav */}
          <div className="tagrow jump-row" style={{ justifyContent: "center", marginTop: 14 }}>
            {regular.map((e, i) => (
              <Reveal key={e.slug} as="a" variant="zoom" delay={(i % 8) * 45}
                href={`#${e.slug}`} className="tag-pill jump-pill">
                {e.emoji} {e.title}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {/* Featured signature events — prominent headers */}
          {featured.map((e) => (
            <div key={e.slug} id={e.slug} className="gal-section" style={{ scrollMarginTop: 100 }}>
              <Reveal variant="left">
                <div className="event-head fun-head feat-head">
                  <span className="em pop-em">{e.emoji}</span>
                  <div>
                    <span className="feat-badge">Signature Event</span>
                    <h3>{e.title}</h3>
                  </div>
                  <div className="rule" />
                </div>
              </Reveal>
              <GalleryGrid base="events" section={e} />
            </div>
          ))}

          {/* Regular events */}
          {regular.map((e) => (
            <div key={e.slug} id={e.slug} className="gal-section" style={{ scrollMarginTop: 100 }}>
              <Reveal variant="left">
                <div className="event-head fun-head">
                  <span className="em pop-em">{e.emoji}</span>
                  <h3>{e.title}</h3>
                  <div className="rule" />
                </div>
              </Reveal>
              <GalleryGrid base="events" section={e} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
