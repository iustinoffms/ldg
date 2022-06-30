import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const DisplayAmounts = ({ billAmount, peopleInput, tipInput, setReset }) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    function validateInputs() {
      if (!Number(billAmount) || !Number(peopleInput) || !Number(tipInput)) {
        setTipAmount(0);
        setTotalAmount(0);

        return;
      }

      setTipAmount((+billAmount * (+tipInput / 100)) / +peopleInput);
      setTotalAmount(
        (+billAmount * (+tipInput / 100)) / +peopleInput +
          billAmount / peopleInput
      );
    }
    validateInputs();
  }, [billAmount, peopleInput, tipInput]);

  return (
    <>
      <Box sx={{ flex: 3, padding: "2rem 1rem" }}>
        <Box
          sx={{
            fontSize: "1.2rem",
            margin: "2rem 0rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Tip Amount
          <Typography
            component="p"
            sx={{
              color: "hsl(172, 67%, 45%)",
              fontWeight: 800,
              fontSize: "2.2rem",
              fontFamily: "Space Mono",
            }}
          >
            {" "}
            {tipAmount.toFixed(2)}
          </Typography>
        </Box>

        <Box
          sx={{
            fontSize: "1.2rem",
            margin: "2rem 0rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Total
          <Typography
            component="p"
            sx={{
              color: "hsl(172, 67%, 45%)",
              fontWeight: 800,
              fontSize: "2.2rem",
              fontFamily: "Space Mono",
            }}
          >
            {" "}
            ${totalAmount.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default DisplayAmounts;
