import { useState } from "react";
import "./App.css";
import display from "ldg-simple-math";

function App() {
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setResults(display(e.target[0].value, e.target[1].value));
  }
  return (
    <div className="App">
      <h2>Welcome to Simple Math</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-number">What is your first number?</label>
          <input type="number" name="first-number" id="first-number" required />
        </div>
        <div>
          <label htmlFor="second-number">What is your second number?</label>
          <input
            type="number"
            name="second-number"
            id="second-number"
            required
          />
        </div>
        <div>
          <input type="submit" value="Calculate" id="calculate-button" />
        </div>
      </form>
      <div id="display-results">
        Results
        {results.map((result, i) => {
          return <p key={i}>{result}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
