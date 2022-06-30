import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";

const PeopleInput = ({ peopleInput, setPeopleInput }) => {
  return (
    <Box>
      <Typography
        variant="p"
        sx={{ fontSize: "0.8rem", fontWeight: 600 }}
        gutterBottom
        component="div"
      >
        Number of People
      </Typography>
      <TextField
        InputProps={{
          style: {
            background: "hsl(189, 41%, 97%)",
          },
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        color="third"
        size="small"
        disabled={false}
        value={peopleInput}
        placeholder="0"
        onChange={(e) => {
          setPeopleInput(e.target.value);
        }}
      />
    </Box>
  );
};

export default PeopleInput;
