import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SelectTip = ({ tipInput, setTipInput }) => {
  return (
    <div className="select-tip-container">
      <p>Select Tip</p>
      <Box
        sx={{
          width: "500px",
          background: "cyan",
        }}
      >
        <Grid container columns={3} sx={{ border: "1px solid red" }}>
          {[5, 10, 15, 25, 50].map((percent) => (
            <Grid item xs={1} sx={{ border: "1px solid blue" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setTipInput(5);
                }}
              >
                {percent}%
              </Button>
            </Grid>
          ))}
          <Grid item xs={1} sx={{ border: "1px solid blue" }}>
            <TextField
              id="margin-none"
              type="number"
              placeholder="Custom"
              value={tipInput}
              onChange={(e) => {
                setTipInput(e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SelectTip;
