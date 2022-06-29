import Functionalities from "./components/Functionalities";
import Display from "./components/Display";
import { useState } from "react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const CalculatorContainer = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  const resetAll = () => {
    setBillAmount("");
    setTipInput("");
    setPeopleInput("");
  };

  return (
    <>
      <Container>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0.5rem",
          }}
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
