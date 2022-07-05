import { Typography } from "@mui/material";
import { ReactComponent as Xlogo } from "../icons/icon-x.svg";
import { ReactComponent as Ologo } from "../icons/icon-o.svg";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import styled from "styled-components";

const NewGame = ({ pickSymbol, setPickSymbol, setVsCPU }) => {
  const navigate = useNavigate();

  const handleCPUClick = () => {
    let path = `/game`;
    navigate(path);
    setVsCPU(true);
  };

  const handleVSPlayerClick = () => {
    let path = `/game`;
    navigate(path);
    setVsCPU(false);
  };

  return (
    <StyledNewGamePage>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Xlogo />
          <Ologo />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <Paper
            elevation={10}
            sx={{ backgroundColor: "#1F3641", padding: "1rem" }}
          >
            <Typography
              color="#A8BFC9"
              align="center"
              fontSize={"1rem"}
              sx={{ padding: "0.5rem" }}
            >
              PICK PLAYER 1'S MARK
            </Typography>

            <Box
              sx={{
                fontSize: "2rem",
                display: "flex",
                backgroundColor: "#1A2A33",
                padding: "0.5rem",
                borderRadius: "10px",
              }}
            >
              <Button
                onClick={() => setPickSymbol("x")}
                variant="contained"
                disableElevation
                sx={{
                  flex: 1,
                  border: "none",
                }}
                color={pickSymbol === "x" ? "forth" : "third"}
              >
                <Xlogo />
              </Button>
              <Button
                onClick={() => setPickSymbol("0")}
                variant="contained"
                disableElevation
                sx={{
                  flex: 1,
                  border: "none",
                }}
                color={pickSymbol === "0" ? "forth" : "third"}
              >
                <Ologo />
              </Button>
            </Box>
            <Typography
              color="#A8BFC9"
              align="center"
              fontSize={"0.7rem"}
              sx={{ marginTop: "0.5rem" }}
            >
              REMEBER: X GOES FIRST
            </Typography>
          </Paper>
          <Button variant="contained" onClick={handleCPUClick} color="primary">
            NEW GAME (VS CPU)
          </Button>
          <Button
            onClick={handleVSPlayerClick}
            variant="contained"
            color="secondary"
          >
            NEW GAME (VS PLAYER)
          </Button>
        </Box>
      </Container>
    </StyledNewGamePage>
  );
};
const StyledNewGamePage = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(26, 42, 51);
`;
export default NewGame;
