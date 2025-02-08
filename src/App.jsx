import React, { useState, useEffect } from "react";
import Piano from "./components/Piano";
import Controls from "./components/Controls";
import * as Tone from "tone";
import "../dist/output.css";

function App() {
  const [volume, setVolume] = useState(0.5);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState([]);

  const synth = React.useMemo(() => new Tone.Synth().toDestination(), []);

  const keyMap = {
    A: "C4",
    W: "C#4",
    S: "D4",
    E: "D#4",
    D: "E4",
    F: "F4",
    T: "F#4",
    G: "G4",
    Y: "G#4",
    H: "A4",
    U: "A#4",
    J: "B4",
    K: "C5",
    O: "C#5",
    L: "D5",
    P: "D#5",
    Z: "E5",
    X: "F5",
    C: "F#5",
    V: "G5",
    B: "G#5",
    N: "A5",
    M: "A#5",
    ",": "B5",
  };

  const playNote = (note) => {
    if (!note) return;
    synth.volume.value = volume * -10;
    synth.triggerAttackRelease(note, "8n");

    if (isRecording) {
      setRecording((prev) => [...prev, { note, time: Date.now() }]);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setRecording([]);
    }
  };

  const playRecording = () => {
    if (!recording.length) return;
    let startTime = recording[0].time;

    recording.forEach(({ note, time }) => {
      setTimeout(() => playNote(note), time - startTime);
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const note = keyMap[e.key.toUpperCase()];
      if (note) {
        playNote(note);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="app">
      <h1>Keyboard Piano 🎹</h1>
      <Piano playNote={playNote} />
      <Controls
        isRecording={isRecording}
        toggleRecording={toggleRecording}
        playRecording={playRecording}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
}

export default App;
