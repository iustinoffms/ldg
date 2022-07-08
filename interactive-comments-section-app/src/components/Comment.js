import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import { useState } from "react";
import { TextareaAutosize } from "@mui/material";

function Comment({ comment }) {
  const username = comment.user.username;
  const userPhoto = comment.user.image.png;
  const dateCreated = comment.createdAt;
  const content = comment.content;

  const [replyBtnInsideComment, setReplyBtnInsideComment] = useState(false);
  const [initialReplies, setInitialReplies] = useState(comment.replies);
  const [createdReply, setCreatedReply] = useState(false);

  console.log("reply", replyBtnInsideComment);
  console.log("send", createdReply);

  return (
    <Container maxWidth="sm" sx={{ border: "1px solid blue" }}>
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
          <Button variant="contained">+</Button>
          <Typography>{comment.score}</Typography>
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
              <Button
                onClick={() => {
                  setReplyBtnInsideComment(!replyBtnInsideComment);
                }}
                variant="contained"
              >
                Replay
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography>{content}</Typography>
          </Box>
        </Paper>
      </Paper>
      <div>
        {" "}
        {replyBtnInsideComment && !createdReply && (
          <CreateReply
            setCreatedReply={setCreatedReply}
            setReplyBtnInsideComment={setReplyBtnInsideComment}
            replyBtnInsideComment={replyBtnInsideComment}
          />
        )}
      </div>
      <div>
        {" "}
        {initialReplies.map((reply) => (
          <RepliesList
            key={reply.id}
            reply={reply}
            setInitialReplies={setInitialReplies}
            createdReply={createdReply}
          />
        ))}
      </div>
    </Container>
  );
}

function CreateReply({
  setCreatedReply,
  createdReply,
  setReplyBtnInsideComment,
  replyBtnInsideComment,
}) {
  const [replyTextInput, setReplyTextInput] = useState("");
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
        <img src="#" alt="user" />
        <TextareaAutosize
          onChange={(e) => setReplyTextInput(e.target.value)}
          minRows={10}
          aria-label="maximum height"
          placeholder="Add a comment..."
          style={{ width: "100%" }}
          value={replyTextInput}
          required
        />
        <Button
          onClick={() => {
            setReplyBtnInsideComment(!replyBtnInsideComment);
          }}
          variant="contained"
        >
          SEND
        </Button>
      </Paper>
    </Container>
  );
}

function RepliesList({ reply, setInitialReplies }) {
  const username = reply.user.username;
  const userPhoto = reply.user.image.png;
  const dateCreated = reply.createdAt;
  const content = reply.content;
  return (
    <Container maxWidth="sm">
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
          <Button variant="contained">+</Button>
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
              <Button variant="contained">Replay</Button>
            </Box>
          </Box>
          <Box>
            <Typography>{content}</Typography>
          </Box>
        </Paper>
      </Paper>
    </Container>
  );
}

export default Comment;
