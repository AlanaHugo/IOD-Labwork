import { useState } from "react";
import "./App.css";
// Excersize 1.2 - import component to app.jsx
import GreetingComponent from "./components/Greeting";
import BigCats from "./components/BigCats";
import Cat from "./components/BigCats"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 1.2 Component added to the app  */}
      <div>
        {/* 1.3 pass name "John" in place of World */}
        <GreetingComponent nameProp="John">
          Welcome to the Jungle.
        </GreetingComponent>
      </div>
      {/* Excersize 2 */}
      <div className="BigCats">
        <BigCats />
      </div>

      <div className="SingleCat">
        <Cat />
      </div>
    </>
  );
}

export default App;
