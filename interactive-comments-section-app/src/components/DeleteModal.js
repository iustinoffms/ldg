import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function DeleteModal({
  showModal,
  setShowModal,
  initialComments,
  setInitialComments,
  commentId,
}) {
  if (!showModal) {
    return;
  }

  return (
    <Box
      sx={{
        zIndex: 1,
        background: "blue",
        borderRadius: "7px",
        position: "absolute",
        textAlign: "center",
        padding: "2rem 3rem",
        maxWidth: "300px",
      }}
    >
      <Typography variant="h6">
        Delete comment
        <Typography>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </Typography>
      </Typography>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            setShowModal(!showModal);
            const deletedComment = initialComments.filter((c) =>
              c.id !== commentId ? c : null
            );
            setInitialComments(deletedComment);
          }}
        >
          Yes, delete
        </Button>
        <Button variant="contained" onClick={() => setShowModal(!showModal)}>
          No, cancel
        </Button>
      </Box>
    </Box>
  );
}

export default DeleteModal;
