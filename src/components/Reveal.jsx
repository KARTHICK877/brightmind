import { useEffect, useRef, useState } from "react";

/**
 * Reveal — animates its children in when scrolled into view.
 *
 * props:
 *   as        – element tag (default "div")
 *   variant   – "up" | "down" | "left" | "right" | "zoom" | "fade"
 *   delay     – ms before the animation starts (for stagger)
 *   once      – animate only the first time (default true)
 *   className – extra classes
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  once = true,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: show immediately, no animation.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }

    // If the element is ALREADY on screen when the page loads, don't make it
    // rise up on its own — it should ride in with the page transition. Only
    // content you scroll down to gets the reveal animation.
    const rect = el.getBoundingClientRect();
    const inViewNow = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inViewNow) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal r-${variant} ${shown ? "is-shown" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
