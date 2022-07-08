import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import { useState } from "react";
import RepliesList from "./RepliesList";
import CreateReply from "./CreateReply";

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
      <Box>
        {" "}
        {replyBtnInsideComment && !createdReply && (
          <CreateReply
            setCreatedReply={setCreatedReply}
            setReplyBtnInsideComment={setReplyBtnInsideComment}
            replyBtnInsideComment={replyBtnInsideComment}
            initialReplies={initialReplies}
            setInitialReplies={setInitialReplies}
          />
        )}
      </Box>
      <Box>
        {" "}
        {initialReplies.map((reply) => (
          <RepliesList
            key={reply.id}
            reply={reply}
            createdReply={createdReply}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Comment;
