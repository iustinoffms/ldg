import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Modal = ({
  showModal,
  setShowModal,
  setInitialState,
  winner,
  pickSymbol,
  vsCPU,
}) => {
  const navigate = useNavigate();

  if (!showModal) {
    return null;
  }

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
          {}
          <Typography component="p">Winner state here</Typography>

          <Box>
            {winner === "no-winner" ? (
              <Typography component="h5">ROUND TIED</Typography>
            ) : (
              <Typography component="h5">{winner} TAKES THE ROUND</Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                let path = `/`;
                navigate(path);
              }}
            >
              QUIT
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setShowModal(false);
                setInitialState(Array(9).fill(null));
              }}
            >
              NEXT ROUND
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

export default Modal;
