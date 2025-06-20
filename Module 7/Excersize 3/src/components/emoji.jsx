import React from 'react';
import { useMoodContext } from '../contexts/MoodContext';

// get the mood values from context
function MoodChanger() {
  const { mood, toggleMood } = useMoodContext();
  
  return (
    <div>
      <h1>Current Mood: {mood}</h1>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default MoodChanger;