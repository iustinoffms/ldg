import { useState, useEffect } from "react";
import { cpuTurn } from "../randomizor";

export const useFunctionalities = (props) => {
  console.log(props);
  const [initialState, setInitialState] = useState(Array(9).fill(null));

  const [playerTurn, setPlayerTurn] = useState(props.pickSymbol);
  const [symbol, setSymbol] = useState(props.pickSymbol);

  const [xwin, setXwin] = useState(0);
  const [owin, setOwin] = useState(0);
  const [ties, setTies] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function calculateWinner(clickedButtons) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        clickedButtons[a] &&
        clickedButtons[a] === clickedButtons[b] &&
        clickedButtons[a] === clickedButtons[c]
      ) {
        return clickedButtons[a];
      }
    }
    if (initialState.find((value) => value === null) === undefined) {
      return "no-winner";
    }
    return null;
  }
  const winner = calculateWinner(initialState);

  function countScores() {
    if (winner === "x") {
      setXwin(xwin + 1);
      setShowModal(true);
    } else if (winner === "0") {
      setOwin(owin + 1);
      setShowModal(true);
    } else if (winner === "no-winner") {
      setTies(ties + 1);
      setShowModal(true);
    }
  }
  useEffect(() => {
    countScores();
  }, [winner]);

  return [
    initialState,
    setInitialState,
    playerTurn,
    setPlayerTurn,
    symbol,
    setSymbol,
    xwin,
    setXwin,
    owin,
    setOwin,
    ties,
    setTies,
    calculateWinner,
    winner,
    countScores,
    showModal,
    setShowModal,
  ];
};
