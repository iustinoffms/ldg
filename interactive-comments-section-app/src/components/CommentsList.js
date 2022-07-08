import Comment from "./Comment";
import { Container } from "@mui/system";
import { useState } from "react";
import data from "../data.json";
import CreateComment from "./CreateComment";

function CommentsList() {
  const [initialComments, setInitialComments] = useState(data.comments);
  const currentUser = data.currentUser;

  return (
    <Container>
      {initialComments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          initialComments={initialComments}
          setInitialComments={setInitialComments}
          currentUser={currentUser}
        />
      ))}
      <CreateComment
        initialComments={initialComments}
        setInitialComments={setInitialComments}
        currentUser={currentUser}
      />
    </Container>
  );
}

export default CommentsList;
