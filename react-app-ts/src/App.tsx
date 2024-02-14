
import "./App.css";
import { useState } from "react";
function App() {
  const { counter, setCounter } = useState(0);
  return (
    <div className="App">
      <button onClick={setCounter(counter - 1)}>--</button>
      <h1 style={{ color = counter > 0 ? "green" : "red" }}>{counter}</h1>
      <button onClick={setCounter(counter + 1)}>++</button>
    </div>
  );
}

export default App;
