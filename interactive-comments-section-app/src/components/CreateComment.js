import { Button, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { TextareaAutosize } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function CreateComment({ initialComments, setInitialComments, userImage }) {
  const [textInput, setTextInput] = useState("");

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
        <img src={userImage.png} alt="user" />
        <TextareaAutosize
          onChange={(e) => setTextInput(e.target.value)}
          minRows={10}
          aria-label="maximum height"
          placeholder="Add a comment..."
          style={{ width: "100%" }}
          value={textInput}
          required
        />
        <Button
          onClick={() => {
            setInitialComments([
              ...initialComments,
              {
                id: uuid(),
                content: textInput,
                createdAt: getCurrentDate(),
                score: 0,

                user: {
                  image: {
                    png: "./images/avatars/image-juliusomo.png",
                    webp: "./images/avatars/image-juliusomo.webp",
                  },
                  username: "juliusomo",
                },
                replies: [],
              },
            ]);
            setTextInput("");
          }}
          variant="contained"
        >
          SEND
        </Button>
      </Paper>
    </Container>
  );
}

export default CreateComment;
