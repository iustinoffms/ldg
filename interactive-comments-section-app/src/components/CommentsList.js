import Comment from "./Comment";
import { Container } from "@mui/system";

function CommentsList({ initialComments }) {
  return (
    <Container>
      {initialComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Container>
  );
}

export default CommentsList;
