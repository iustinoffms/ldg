import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";

function Reply({
  reply,
  showModal,
  setShowModal,
  deleteReply,
  setDeleteReply,
  replyId,
  setReplyId,
}) {
  const username = reply.user.username;
  const userPhoto = reply.user.image.png;
  const dateCreated = reply.createdAt;
  const content = reply.content;

  return (
    <Container maxWidth="md">
      <Paper
        elevation={9}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          gap: "2rem",
          margin: "1rem 0rem",
        }}
      >
        <Box
          sx={{
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" onClick={() => {}}>
            +
          </Button>
          <Typography>{reply.score}</Typography>
          <Button variant="contained">-</Button>
        </Box>
        <Paper elevation={0} sx={{}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img src={userPhoto} alt="asklnfkasj" />
              <Typography variant="h6">{username}</Typography>
              <Typography>{dateCreated}</Typography>

              {username === "juliusomo" ? (
                <Box sx={{ display: "flex", gap: "0.2rem" }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShowModal(!showModal);
                      setDeleteReply(!deleteReply);
                      setReplyId(reply.id);
                      // setCommentId(comment.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button variant="contained">Edit</Button>
                </Box>
              ) : (
                <Button variant="contained">Reply</Button>
              )}
            </Box>
          </Box>
          <Box>
            <Typography>
              <Typography variant="span"> @{reply.replyingTo} </Typography>
              {content}
            </Typography>
          </Box>
        </Paper>
      </Paper>
    </Container>
  );
}
export default Reply;
