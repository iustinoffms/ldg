import BillInput from "./BillInput";
import SelectTip from "./SelectTip";
import PeopleInput from "./PeopleInput";
import { Box } from "@mui/material";

const Functionalities = ({
  billAmount,
  setBillAmount,
  tipInput,
  setTipInput,
  peopleInput,
  setPeopleInput,
}) => {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
        <SelectTip tipInput={tipInput} setTipInput={setTipInput} />
        <PeopleInput
          peopleInput={peopleInput}
          setPeopleInput={setPeopleInput}
        />
      </Box>
    </>
  );
};

export default Functionalities;
