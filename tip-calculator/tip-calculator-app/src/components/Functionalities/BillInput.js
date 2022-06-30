import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const BillInput = ({ billAmount, setBillAmount }) => {
  return (
    <Box>
      <Typography
        variant="p"
        sx={{ fontSize: "0.8rem", fontWeight: 600 }}
        gutterBottom
        component="div"
      >
        Bill
      </Typography>

      <TextField
        InputProps={{
          style: {
            background: "hsl(189, 41%, 97%)",
          },
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        color="third"
        size="small"
        disabled={false}
        value={billAmount}
        placeholder="0"
        onChange={(e) => {
          setBillAmount(e.target.value);
        }}
      />
    </Box>
  );
};

export default BillInput;
