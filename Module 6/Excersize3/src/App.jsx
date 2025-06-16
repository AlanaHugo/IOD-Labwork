// src/App.jsx
import { useState } from 'react';
import './App.css';
import MoodChanger from './components/emoji';

function App() {
  const [mood, setMood] = useState("😊");

  const toggleMood = () => {
    setMood(prevMood => (prevMood === "😊" ? "😢" : "😊"));
  };

  return (
    <div>
      <MoodChanger mood={mood} toggleMood={toggleMood} />
    </div>
  );
}

export default App;

