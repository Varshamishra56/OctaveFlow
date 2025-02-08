import React from "react";

const Controls = ({ playRecording, isRecording }) => {
  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 
          ${
            isRecording
              ? "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        onClick={playRecording}
        disabled={!isRecording}
      >
        🎵 Play Recording
      </button>
    </div>
  );
};

export default Controls;
