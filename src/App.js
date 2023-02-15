import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <center className="box">
        <input
          style={{ marginTop: "30px", width: "350px", height: "30px" }}
          type="text"
          value={input}
          name="input"
          onChange={handler}
        />

        <br />
        <br />
        <button onClick={() => setResult(eval(input))} type="button">
          ENTER
        </button>
        <br />
        <br />

        <h4>Result:{result}</h4>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <br />
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput(input + "0")}>0</button>
        <br />
        <button onClick={() => setInput("")}>clr</button>
        <button onClick={() => setInput(input + "+")}>+</button>
        <button onClick={() => setInput(input + "-")}>-</button>
        <button onClick={() => setInput(input + "*")}>*</button>
        <button onClick={() => setInput(input + "/")}>/</button>
      </center>
    </div>
  );
}

export default App;
