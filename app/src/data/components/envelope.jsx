import { useState } from "react";
import "./Envelope.css";

export default function Envelope({ label, onOpen, isOpening }) {
  const [pressed, setPressed] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setPressed(true);
    onOpen();
  };

  return (
    <div className={`envelope-stage ${isOpening ? "envelope-stage--opening" : ""}`}>
      <button
        className="envelope"
        onClick={handleOpen}
        aria-label={`Open the letter for ${label.replace("For ", "")}`}
      >
        <div className="envelope__back" />
        <div className="envelope__letter-peek" />
        <div className={`envelope__flap ${pressed ? "envelope__flap--open" : ""}`} />
        <div className="envelope__body" />
        <div className="envelope__label">{label}</div>
        <div className={`envelope__seal ${pressed ? "envelope__seal--cracked" : ""}`}>
          <span className="envelope__seal-glyph">Y</span>
        </div>
      </button>
      <p className="envelope__hint">tap the seal to open</p>
    </div>
  );
}
