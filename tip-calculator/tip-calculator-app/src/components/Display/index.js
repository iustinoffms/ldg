import DisplayAmounts from "./DisplayAmounts";
import ResetButton from "./ResetButton";
import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
function Display({ billAmount, peopleInput, tipInput, resetAll }) {
  const [reset, setReset] = useState(true);

  useEffect(() => {
    billAmount || peopleInput || tipInput ? setReset(false) : setReset(true);
  }, [billAmount, peopleInput, tipInput]);

  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "1rem",
        background: "hsl(183, 100%, 15%)",
        borderRadius: "1.5rem",
        marginRight: "1rem",
        color: "white",
      }}
    >
      <DisplayAmounts
        billAmount={billAmount}
        peopleInput={peopleInput}
        tipInput={tipInput}
      />
      <ResetButton resetAll={resetAll} reset={reset} />
    </Paper>
  );
}

export default Display;
