import { Button, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import { v4 as uuid } from "uuid";

function CreateReply({
  commentId,
  initialComments,
  setInitialComments,
  setReplyBtnInsideComment,
  replyBtnInsideComment,
  currentUser,
}) {
  const [replyTextInput, setReplyTextInput] = useState("");

  function getCurrentDate() {
    const today = new Date();
    const day = today.getUTCDate();

    return `${day} ${today.toLocaleString("en-EN", { month: "long" })}`;
  }

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
        <img src={currentUser.image.png} alt="user" />
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
            const updatedComments = initialComments.map((c) =>
              c.id === commentId
                ? {
                    ...c,
                    replies: [
                      ...c.replies,
                      {
                        id: uuid(),
                        content: replyTextInput,
                        createdAt: getCurrentDate(),
                        score: 4,
                        replyingTo: c.user.username,
                        user: {
                          image: {
                            png: "./images/avatars/image-juliusomo.png",
                            webp: "./images/avatars/image-juliusomo.webp",
                          },
                          username: "juliusomo",
                        },
                      },
                    ],
                  }
                : c
            );

            setInitialComments(updatedComments);
          }}
          variant="contained"
        >
          SEND
        </Button>
      </Paper>
    </Container>
  );
}

export default CreateReply;
