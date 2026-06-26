import { useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { buildImagePaths } from "../data/galleries";

// base = "gallery" or "events"
export default function GalleryGrid({ base, section }) {
  const paths = buildImagePaths(base, section);
  const items = paths.map((src, i) => ({ src, label: `${section.title} ${i + 1}` }));
  const [current, setCurrent] = useState(null);

  const open = (src) => {
    const idx = items.findIndex((it) => it.src === src);
    setCurrent(idx >= 0 ? idx : 0);
  };

  return (
    <>
      <div className="gallery-grid fun-grid">
        {items.map((it, i) => (
          <Reveal
            key={it.src}
            variant="zoom"
            delay={(i % 5) * 80}
            className={`tile tilt-${i % 4}`}
          >
            <Photo src={it.src} label={it.label} index={i} onOpen={open} />
          </Reveal>
        ))}
      </div>

      <Lightbox
        items={items}
        current={current}
        setCurrent={setCurrent}
        onClose={() => setCurrent(null)}
      />
    </>
  );
}
