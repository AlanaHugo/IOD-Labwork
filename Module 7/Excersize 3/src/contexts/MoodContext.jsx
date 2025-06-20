import React, { createContext, useContext, useState } from 'react';

// create the context
const MoodContext = createContext();

// create context provider
export const MoodProvider = (props) => {
    //context provider holds state at top level
    const [mood, setMood] = useState("😊");
    //context provider holds the update function
    
    const toggleMood = () => {
    setMood(prevMood => (prevMood === "😊" ? "😢" : "😊"));
  };

return (
    <MoodContext.Provider value={{mood, toggleMood}}>
        {props.children}
    </MoodContext.Provider>
);
};

// custom hook for using context
export const useMoodContext = () => {
    return useContext(MoodContext)
} 

