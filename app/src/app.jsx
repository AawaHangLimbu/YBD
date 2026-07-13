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

     