import Button from "@mui/material/Button";

const ResetButton = ({ resetAll }) => {
  return (
    <div className="reset-button-container">
      <Button onClick={resetAll} variant="contained" color="primary">
        Reset
      </Button>
    </div>
  );
};

export default ResetButton;
