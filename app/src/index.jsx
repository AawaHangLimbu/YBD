import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function InteractiveCard() {
  const [liked, setLiked] = useState(false);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="container">
      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front Side */}
        <div className="card-face front">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
            alt="Nature"
          />

          <div className="content">
            <span className="category">Nature</span>

            <h2>Mountain Adventure</h2>

            <p>
              Experience the beauty of nature with breathtaking mountain views,
              fresh air, and unforgettable adventures.
            </p>

            <div className="buttons">
              <button
                className={`like-btn ${liked ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
              >
                {liked ? "❤️ Liked" : "🤍 Like"}
              </button>

              <button
                className="explore-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Exploring mountains...");
                }}
              >
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-face back">
          <h2>More Information</h2>

          <ul>
            <li>📍 Location: Nepal Himalayas</li>
            <li>⛰️ Elevation: 8,848m</li>
            <li>🌤️ Best Season: Spring</li>
            <li>🎒 Activities: Hiking & Camping</li>
          </ul>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InteractiveCard />
  </React.StrictMode>
);