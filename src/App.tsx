import "./App.css";
import { useState } from "react";
function App() {
  const [randomN, setRandomN]: any[] = useState("genera numero");
  return (
    <div className="App">
      <button onClick={() => setRandomN(Math.random())}>{randomN}</button>
    </div>
  );
}

export default App;
