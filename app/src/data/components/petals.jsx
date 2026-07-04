import { useMemo } from "react";
import "./Petals.css";

// Generates a fixed set of petals with randomized but stable positions/timings
export default function Petals({ count = 14 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 10,
      size: 8 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 80,
      hue: Math.random() > 0.5 ? "lavender" : "sage",
    }));
  }, [count]);

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className={`petal petal--${p.hue}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.3,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
