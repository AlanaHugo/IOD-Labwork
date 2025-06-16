function MoodChanger({ mood, toggleMood }) {
  return (
    <div>
      <h1>Current Mood: {mood}</h1>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default MoodChanger;