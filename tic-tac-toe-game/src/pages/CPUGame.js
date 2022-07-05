import { useState, useEffect } from "react";
import Xlogo from "../icons/icon-x.svg";
import Ologo from "../icons/icon-o.svg";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import RefreshIcon from "@mui/icons-material/Refresh";
import Modal from "../Modal";
import styled from "styled-components";
import { cpuTurn } from "../randomizor";

const Game = ({ pickSymbol, vsCPU }) => {
  const [initialState, setInitialState] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("x");
  const [symbol, setSymbol] = useState(pickSymbol);
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

  function firstPick() {
    if (symbol === "0" && playerTurn === "x") {
      const copyOfInitialState = [...initialState];
      const cpuFirst = cpuTurn(copyOfInitialState);
      copyOfInitialState[cpuFirst] = "x";
      setInitialState(copyOfInitialState);
      setPlayerTurn("0");
    }
  }

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
    firstPick();
  }, [winner]);

  return (
    <StyledPage>
      <Container maxWidth="sm" sx={{}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "7rem",
          }}
        >
          {" "}
          <Paper elevation={0} sx={{ flex: 1, backgroundColor: "#1A2A33" }}>
            <img
              src={Xlogo}
              alt="X"
              style={{ width: "30px", height: "30px" }}
            />
            <img
              src={Ologo}
              alt="0"
              style={{ width: "30px", height: "30px" }}
            />
          </Paper>
          <Paper
            sx={{
              flex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1F3641",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="span"
                sx={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "#A8BFC9",
                  padding: "1rem",
                }}
              >
                {playerTurn}
              </Typography>{" "}
              TURN
            </Typography>
          </Paper>
          <Button
            sx={{ flex: 1 }}
            variant="contained"
            onClick={() => setInitialState(Array(9).fill(null))}
          >
            <RefreshIcon />
          </Button>
        </Box>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          setInitialState={setInitialState}
          winner={winner}
          pickSymbol={pickSymbol}
          vsCPU={vsCPU}
        />
        <Box sx={{ marginTop: "1rem" }}>
          <Grid container>
            {initialState.map((value, index) => (
              <Grid
                item
                xs={4}
                key={index}
                sx={{
                  padding: "0.3rem",
                  height: "100px",
                }}
              >
                <Button
                  color="fifth"
                  variant="contained"
                  sx={{
                    width: "100%",
                    height: "100%",
                    fontSize: "5rem",
                    color: "white",
                    fontWeight: 900,
                  }}
                  onClick={() => {
                    const copyInitialState = [...initialState];
                    if (winner || copyInitialState[index]) {
                      return;
                    }
                    const otherSymbol = symbol === "x" ? "0" : "x";
                    if (vsCPU) {
                      copyInitialState[index] = symbol;
                      const cpuPick = cpuTurn(copyInitialState);
                      copyInitialState[cpuPick] = otherSymbol;
                      setInitialState(copyInitialState);
                    } else {
                      copyInitialState[index] = symbol;
                      setSymbol(symbol === "x" ? "0" : "x");
                      setPlayerTurn(symbol === "x" ? "0" : "x");
                      setInitialState(copyInitialState);
                    }
                  }}
                >
                  {initialState[index]}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3rem",
            marginTop: "1rem",
          }}
        >
          {[
            {
              title: "X",
              score: xwin,
              color: "#31C3BD",
            },
            { title: "Ties", score: ties, color: "#A8BFC9" },
            { title: "0", score: owin, color: "#F2B137" },
          ].map((obj, index) => (
            <Paper
              key={index}
              sx={{
                flex: 1,
                textAlign: "center",
                padding: "1rem",
                backgroundColor: obj.color,
              }}
            >
              <Typography>{obj.title}</Typography>
              <Typography>{obj.score}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </StyledPage>
  );
};
const StyledPage = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(26, 42, 51);
  z-index: 0;
`;
export default Game;
