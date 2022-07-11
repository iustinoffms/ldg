import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import { useState } from "react";
import RepliesList from "./RepliesList";
import CreateReply from "./CreateReply";

function Comment({ comment, initialComments, setInitialComments }) {
  const username = comment.user.username;
  const userPhoto = comment.user.image.png;
  const dateCreated = comment.createdAt;
  const content = comment.content;

  const [initialReplies, setInitialReplies] = useState(comment.replies);
  const [replyBtnInsideComment, setReplyBtnInsideComment] = useState(false);
  const [createdReply, setCreatedReply] = useState(false);

  const increaseScore = () => {
    const increasedScoreComment = initialComments.map((c) =>
      c.id === comment.id ? { ...c, score: c.score + 1 } : c
    );
    setInitialComments(increasedScoreComment);
  };
  const decreaseScore = () => {
    const decreasedScoreComment = initialComments.map((c) =>
      c.id === comment.id ? { ...c, score: c.score - 1 } : c
    );
    setInitialComments(decreasedScoreComment);
  };
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
          <Button onClick={() => increaseScore()} variant="contained">
            +
          </Button>
          <Typography>{comment.score}</Typography>
          <Button onClick={() => decreaseScore()} variant="contained">
            -
          </Button>
        </Box>
        <Box elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                border: "1px solid purple",
              }}
            >
              <img src={userPhoto} alt="asklnfkasj" />
              <Typography variant="h6">{username}</Typography>
              <Typography>{dateCreated}</Typography>
              <Button
                onClick={() => {
                  setReplyBtnInsideComment(!replyBtnInsideComment);
                }}
                variant="contained"
              >
                Reply
              </Button>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", border: "1px solid red", padding: "1rem" }}
          >
            <Typography sx={{ border: "1px solid blue" }}>{content}</Typography>
          </Box>
        </Box>
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
            setInitialComments={setInitialComments}
            initialComments={initialComments}
            commentId={comment.id}
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
