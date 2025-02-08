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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      <div className="relative flex items-end gap-1 p-4 bg-gray-800 rounded-lg shadow-2xl">
        {keys.map((key) => (
          <div
            key={key.note}
            className={`relative flex justify-center items-end ${
              key.isBlack
                ? "bg-black text-white w-10 h-32 -ml-5 z-10"
                : "bg-white text-black w-14 h-40"
            } border border-gray-700 rounded-b-md shadow-lg cursor-pointer transition-transform active:scale-95`}
            onClick={() => playNote(key.note)}
          >
            <span
              className={`absolute bottom-2 text-xs font-bold ${
                key.isBlack ? "text-white" : "text-gray-700"
              }`}
            >
              {key.key}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piano;
