import { useState } from "react";
import "./MemoryCards.css";

export default function MemoryCards({ memories }) {
  const [revealed, setRevealed] = useState(() => new Set());

  const toggle = (index) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className="memory-grid">
      {memories.map((memory, i) => {
        const isOpen = revealed.has(i);
        return (
          <button
            key={memory.title}
            className={`memory-card ${isOpen ? "memory-card--open" : ""}`}
            onClick={() => toggle(i)}
            aria-expanded={isOpen}
          >
            <div className="memory-card__inner">
              <div className="memory-card__face memory-card__face--front">
                <span className="memory-card__mark">✦</span>
                <h3>{memory.title}</h3>
                <span className="memory-card__cta">tap to read</span>
              </div>
              <div className="memory-card__face memory-card__face--back">
                <p>{memory.text}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
