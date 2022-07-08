import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import CurrentUser from "./CreateComment";
import { useState } from "react";

function Comment({ comment }) {
  const [replay, setReplay] = useState(false);
  const username = comment.user.username;
  const userPhoto = comment.user.image.png;
  const dateCreated = comment.createdAt;
  const content = comment.content;

  return (
    <Container maxWidth="sm">
      {comment.replay}
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
                onClick={() => setReplay(!replay ? true : false)}
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
      {replay ? <CurrentUser /> : null}
    </Container>
  );
}

export default Comment;
