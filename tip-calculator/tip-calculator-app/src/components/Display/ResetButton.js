import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const ResetButton = ({ resetAll, reset }) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Button
        sx={{ width: "100%", height: "90%", padding: "1rem 0rem" }}
        onClick={resetAll}
        variant="contained"
        color="secondary"
        disabled={reset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default ResetButton;
