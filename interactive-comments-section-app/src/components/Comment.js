import { Button, Paper, TextareaAutosize, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import { useState } from "react";
import CreateReply from "./CreateReply";
import RepliesList from "./RepliesList";

function Comment({
  comment,
  initialComments,
  setInitialComments,
  currentUser,
  showModal,
  setShowModal,
  setCommentId,
  deleteReply,
  setDeleteReply,
  replyId,
  setReplyId,
}) {
  const username = comment.user.username;
  const userPhoto = comment.user.image.png;
  const dateCreated = comment.createdAt;
  const content = comment.content;

  const [replyBtnInsideComment, setReplyBtnInsideComment] = useState(false);
  const [createdReply, setCreatedReply] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [textInput, setTextInput] = useState("");

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

  const editHandler = () => {
    setShowTextArea(!showTextArea);
  };

  const updateContentHandler = () => {
    const newContent = initialComments.map((c) =>
      c.id === comment.id ? { ...c, content: textInput } : c
    );
    setInitialComments(newContent);
    setShowTextArea(!showTextArea);
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
              }}
            >
              <img src={userPhoto} alt="asklnfkasj" />
              <Typography variant="h6">{username}</Typography>
              <Typography>{dateCreated}</Typography>
              {comment.user.username === currentUser.username ? (
                <Box sx={{ display: "flex", gap: "0.2rem" }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShowModal(!showModal);
                      setCommentId(comment.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button variant="contained" onClick={editHandler}>
                    Edit
                  </Button>
                </Box>
              ) : (
                <Button
                  onClick={() => {
                    setReplyBtnInsideComment(!replyBtnInsideComment);
                  }}
                  variant="contained"
                >
                  Reply
                </Button>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "1rem" }}>
            {showTextArea ? (
              <Box>
                <TextareaAutosize
                  onChange={(e) => setTextInput(e.target.value)}
                  minRows={10}
                  aria-label="maximum height"
                  style={{ width: "100%" }}
                  value={textInput}
                  required
                />
                <Button onClick={updateContentHandler}>Update</Button>
              </Box>
            ) : (
              <Typography sx={{}}>{content}</Typography>
            )}
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
            setInitialComments={setInitialComments}
            initialComments={initialComments}
            commentId={comment.id}
            currentUser={currentUser}
          />
        )}
      </Box>
      <Box>
        {" "}
        <RepliesList
          comment={comment}
          showModal={showModal}
          setShowModal={setShowModal}
          deleteReply={deleteReply}
          setDeleteReply={setDeleteReply}
          replyId={replyId}
          setReplyId={setReplyId}
        />
      </Box>
    </Container>
  );
}

export default Comment;
