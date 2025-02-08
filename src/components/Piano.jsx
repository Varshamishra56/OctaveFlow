import React from "react";

const keys = [
  { note: "C4", key: "A", isBlack: false },
  { note: "C#4", key: "W", isBlack: true },
  { note: "D4", key: "S", isBlack: false },
  { note: "D#4", key: "E", isBlack: true },
  { note: "E4", key: "D", isBlack: false },
  { note: "F4", key: "F", isBlack: false },
  { note: "F#4", key: "T", isBlack: true },
  { note: "G4", key: "G", isBlack: false },
  { note: "G#4", key: "Y", isBlack: true },
  { note: "A4", key: "H", isBlack: false },
  { note: "A#4", key: "U", isBlack: true },
  { note: "B4", key: "J", isBlack: false },
  { note: "C5", key: "K", isBlack: false },
  { note: "C#5", key: "O", isBlack: true },
  { note: "D5", key: "L", isBlack: false },
  { note: "D#5", key: "P", isBlack: true },
  { note: "E5", key: "Z", isBlack: false },
  { note: "F5", key: "X", isBlack: false },
  { note: "F#5", key: "C", isBlack: true },
  { note: "G5", key: "V", isBlack: false },
  { note: "G#5", key: "B", isBlack: true },
  { note: "A5", key: "N", isBlack: false },
  { note: "A#5", key: "M", isBlack: true },
  { note: "B5", key: ",", isBlack: false },
];

const Piano = ({ playNote }) => {
  return (
    <div className="container-fluid bg-dark text-light py-5 vh-100 d-flex align-items-center justify-content-center">
      <div className="piano-container bg-secondary p-4 rounded shadow-lg">
        <h2 className="text-center mb-4">🎹 Virtual Piano</h2>
        <div className="piano d-flex position-relative">
          {keys.map((key) => (
            <div
              key={key.note}
              className={`piano-key d-flex align-items-end justify-content-center position-relative ${
                key.isBlack ? "black-key" : "white-key"
              }`}
              onClick={() => playNote(key.note)}
            >
              <span className="key-label">{key.key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Piano;
