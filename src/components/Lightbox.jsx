import { useEffect } from "react";

// A fun, kid-friendly popup viewer for photos.
export default function Lightbox({ items, current, setCurrent, onClose }) {
  const open = current !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % items.length);
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // stop background scroll
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, items.length, onClose, setCurrent]);

  if (!open) return null;
  const item = items[current];

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" aria-label="Close" onClick={onClose}>✕</button>
      <button
        className="lb-nav lb-prev"
        aria-label="Previous"
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + items.length) % items.length); }}
      >‹</button>

      <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.label} />
        <figcaption>{item.label}</figcaption>
      </figure>

      <button
        className="lb-nav lb-next"
        aria-label="Next"
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % items.length); }}
      >›</button>
    </div>
  );
}
