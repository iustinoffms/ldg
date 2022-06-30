import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { v4 as uuid } from "uuid";

const SelectTip = ({ tipInput, setTipInput }) => {
  return (
    <>
      <Box>
        <Typography
          variant="p"
          sx={{ fontSize: "0.8rem", fontWeight: 600 }}
          gutterBottom
          component="div"
        >
          Select tip %
        </Typography>
        <Grid container columns={3} sx={{}}>
          {[5, 10, 15, 25, 50].map((percent) => (
            <Grid item xs={1} key={uuid()} sx={{ padding: "0.2rem" }}>
              <Button
                variant="contained"
                color={tipInput === percent ? "forth" : "primary"}
                size="large"
                sx={{
                  width: "100%",
                  fontSize: "1.2rem",
                  fontFamily: "Space Mono",
                  fontWeight: 600,
                }}
                onClick={() => {
                  setTipInput(percent);
                }}
              >
                {percent}%
              </Button>
            </Grid>
          ))}
          <Grid item xs={1} sx={{ padding: "0.2rem" }}>
            <TextField
              InputProps={{
                style: {
                  width: "100%",
                  fontSize: "1.4rem",
                  fontFamily: "Space Mono",
                  fontWeight: 600,
                },
              }}
              variant="outlined"
              id="margin-none"
              placeholder="Custom"
              value={tipInput}
              size="small"
              onChange={(e) => {
                setTipInput(e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SelectTip;
