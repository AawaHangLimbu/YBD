import { useState } from "react";
import Envelope from "./components/Envelope";
import Petals from "./components/Petals";
import Gallery from "./components/Gallery";
import MemoryCards from "./components/MemoryCards";
import {
  friendName,
  envelopeLabel,
  openingLine,
  photos,
  memories,
  closingMessage,
  signature,
} from "./data/content";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    // Let the envelope animation play before the letter scrolls into view
    setTimeout(() => setShowLetter(true), 650);
  };

  return (
    <div className="app">
      <Petals />

      {!showLetter && (
        <section className="hero">
          <Envelope label={envelopeLabel} onOpen={handleOpen} isOpening={opened} />
        </section>
      )}

      {showLetter && (
        <main className="letter">
          <section className="letter__header">
            <p className="letter__eyebrow">a letter for</p>
            <h1 className="letter__title">{friendName}</h1>
            <p className="letter__opening">{openingLine}</p>
          </section>

          <section className="letter__section">
            <h2 className="letter__heading">moments</h2>
            <Gallery photos={photos} />
          </section>

          <section className="letter__section">
            <h2 className="letter__heading">a few things I wanted to say</h2>
            <MemoryCards memories={memories} />
          </section>

          <section className="letter__closing">
            <p className="letter__closing-message">{closingMessage}</p>
            <p className="letter__signature">{signature}</p>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
