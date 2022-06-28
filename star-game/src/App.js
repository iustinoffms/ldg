import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const StarsDisplay = (props) =>
  utils
    .range(1, props.starsNr)
    .map((starId) => <div key={starId} className="star" />);

const ButtonsDisplay = (props) =>
  utils.range(1, 9).map((number, index) => (
    <button
      key={index}
      className="number"
      style={{ backgroundColor: colors[props.btnStatus(number)] }}
      onClick={() => props.onClick(number, props.btnStatus(number))}
    >
      {number}
    </button>
  ));

const PlayAgain = (props) => {
  return (
    <div className="finished-game">
      <div
        className="display-message"
        style={{
          color: props.gameStatus === "won" ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {props.gameStatus === "won" ? "Good job" : "You Lost"}
      </div>

      <button className="reset-button" onClick={props.resetGame}>
        {" "}
        Play Again
      </button>
    </div>
  );
};

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      const timer = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;

  const gameStatus =
    availableNumbers.length === 0
      ? "won"
      : secondsLeft === 0
      ? "lost"
      : "still-playing";
  console.log(gameStatus);

  const resetGame = () => {
    setStars(utils.random(1, 9));
    setAvailableNumbers(utils.range(1, 9));
    setCandidateNumbers([]);
    setSecondsLeft(10);
  };

  const buttonStatus = (nr) => {
    if (!availableNumbers.includes(nr)) return "used";
    if (candidateNumbers.includes(nr))
      return candidatesAreWrong ? "wrong" : "candidate";
    return "available";
  };

  const onNumberClick = (nr, currentStatus) => {
    if (currentStatus === "used" || gameStatus !== "still-playing") return;

    const newCandidateNums = determineNewCandidateNums();

    function determineNewCandidateNums() {
      return currentStatus === "available"
        ? candidateNumbers.concat(nr)
        : candidateNumbers.filter((n) => n !== nr);
    }

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNumbers(newCandidateNums);
    } else {
      determineNewAvailableNums();
    }

    function determineNewAvailableNums() {
      const newAvailableNums = availableNumbers.filter(
        (n) => !newCandidateNums.includes(n)
      );

      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNumbers(newAvailableNums);
      setCandidateNumbers([]);
      return newAvailableNums;
    }
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left-side-body">
          {gameStatus !== "still-playing" ? (
            <PlayAgain resetGame={resetGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay starsNr={stars} />
          )}
        </div>
        <div className="right-side-body">
          <ButtonsDisplay btnStatus={buttonStatus} onClick={onNumberClick} />
        </div>
      </div>
      <div className="timer">Time remaining: {secondsLeft}</div>
    </div>
  );
};

const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};
const utils = {
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};
function App() {
  return (
    <div className="App">
      <StarMatch />
    </div>
  );
}

export default App;
