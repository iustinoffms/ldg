import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function DeleteModal({
  showModal,
  setShowModal,
  initialComments,
  setInitialComments,
  commentId,
  deleteReply,
  setDeleteReply,
  replyId,
  setReplyId,
}) {
  if (!showModal) {
    return;
  }

  console.log(deleteReply, replyId);

  const deleteComment = () => {
    const deletedComment = initialComments.filter((c) =>
      c.id !== commentId ? c : null
    );
    setInitialComments(deletedComment);
  };
  if (deleteReply === true) {
    const deleteFromReplies = () => {
      const x = initialComments.map((comment) =>
        comment.replies.filter((r) => (r.id !== replyId ? r : null))
      );
      console.log(x);
    };
    deleteFromReplies();
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
            deleteComment();
            setShowModal(!showModal);
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
