import { useState } from "react";

// Bright rotating colors for placeholders so empty slots look fun, not broken.
const FUN = [
  "linear-gradient(135deg,#FF6B6B,#FFD93D)",
  "linear-gradient(135deg,#6BCB77,#4D96FF)",
  "linear-gradient(135deg,#FFD93D,#FF8E3C)",
  "linear-gradient(135deg,#4D96FF,#6BCB77)",
  "linear-gradient(135deg,#FF8E3C,#FF6B6B)",
  "linear-gradient(135deg,#B983FF,#94B3FD)",
  "linear-gradient(135deg,#FF9CEE,#FFB5E8)",
  "linear-gradient(135deg,#5EEAD4,#4D96FF)",
];
const DOODLES = ["🎈","⭐","🌈","🎨","🚀","🦋","🌟","🎉","🐯","🦁","🌻","🍭"];

export default function Photo({ src, label, index = 0, onOpen }) {
  const [failed, setFailed] = useState(false);
  const grad = FUN[index % FUN.length];
  const doodle = DOODLES[index % DOODLES.length];

  return (
    <div
      className="ph"
      onClick={() => !failed && onOpen && onOpen(src, label)}
      style={failed ? { background: grad } : undefined}
    >
      {!failed && (
        <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />
      )}
      {failed && (
        <div className="fallback">
          <span className="doodle">{doodle}</span>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
