import { gallerySections } from "../data/galleries";
import GalleryGrid from "../components/GalleryGrid";
import Reveal from "../components/Reveal";

export default function Gallery() {
  return (
    <>
      <section className="page-intro fun-intro">
        <div className="wrap">
          <Reveal><span className="eyebrow center">Gallery</span></Reveal>
          <Reveal delay={80}><h1><span className="glitch" data-text="A look around Bright Mind ✨">A look around Bright Mind ✨</span></h1></Reveal>
          <Reveal delay={160}>
            <p>Our spaces, our materials, and the children who make it all come alive. Tap any photo to see it big!</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {gallerySections.map((s) => (
            <div key={s.slug} className="gal-section">
              <Reveal variant="left">
                <div className="event-head fun-head">
                  <span className="em pop-em">{s.emoji}</span>
                  <h3>{s.title}</h3>
                  <div className="rule" />
                </div>
              </Reveal>
              <GalleryGrid base="gallery" section={s} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
