import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>React Hooks API</h1>

      <p className="counter">{counter}</p>
      <div className="button-group">
        <Button
          onClick={() => setCounter(prevCount => prevCount + 1)}
          color="primary"
        >
          +
        </Button>
        <Button
          onClick={() => setCounter(prevCount => prevCount - 1)}
          color="secondary"
        >
          -
        </Button>
        <Button onClick={() => setCounter(0)} color="secondary">
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
