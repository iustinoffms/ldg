import Functionalities from "./components/Functionalities";
import Display from "./components/Display";
import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import useMediaQuery from "@mui/material/useMediaQuery";

const CalculatorContainer = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");
  const matches = useMediaQuery("(min-width:700px)");

  const resetAll = () => {
    setBillAmount("");
    setTipInput("");
    setPeopleInput("");
  };
  return (
    <>
      <Container maxWidth="md">
        <Paper
          elevation={5}
          sx={
            !matches
              ? {
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem 1rem",
                  gap: "2rem",
                  borderRadius: "1.5rem",
                }
              : {
                  display: "flex",
                  padding: "2rem 1rem",
                  gap: "2rem",
                  borderRadius: "1.5rem",
                }
          }
        >
          <Functionalities
            billAmount={billAmount}
            setBillAmount={setBillAmount}
            tipInput={tipInput}
            setTipInput={setTipInput}
            peopleInput={peopleInput}
            setPeopleInput={setPeopleInput}
          />
          <Display
            billAmount={billAmount}
            peopleInput={peopleInput}
            tipInput={tipInput}
            resetAll={resetAll}
          />
        </Paper>
      </Container>
    </>
  );
};

export default CalculatorContainer;
