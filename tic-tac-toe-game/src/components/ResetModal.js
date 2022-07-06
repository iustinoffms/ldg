import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ResetModal = ({
  showResetModal,
  setInitialState,
  setShowResetModal,
  setPlayerTurn,
}) => {
  const navigate = useNavigate();

  if (!showResetModal) {
    return null;
  }
  const cancelHandler = () => {
    let path = "/game";
    navigate(path);
    setShowResetModal(false);
  };
  const resetHandler = () => {
    let path = "/game";
    navigate(path);
    setInitialState(Array(9).fill(null));
    setShowResetModal(false);
    setPlayerTurn("x");
  };
  return (
    <StyledModal>
      <Container maxWidth="xl" sx={{}}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: " center",
            alignItems: "center",
            gap: "0.5rem",
            padding: "2rem 0rem",
            backgroundColor: "#1F3641",
          }}
        >
          <Typography sx={{ color: "#A8BFC9" }} variant="h4">
            RESTART GAME?
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button
              color="secondary"
              variant="contained"
              onClick={cancelHandler}
            >
              NO, CANCEL
            </Button>
            <Button onClick={resetHandler} variant="contained">
              YES, RESTART
            </Button>
          </Box>
        </Paper>
      </Container>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid yellow;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 1s ease;
  z-index: 1;
`;

export default ResetModal;
