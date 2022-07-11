import Comment from "./Comment";
import { Container } from "@mui/system";

import CreateComment from "./CreateComment";

function CommentsList({
  showModal,
  setShowModal,
  initialComments,
  setInitialComments,
  currentUser,
  commentId,
  setCommentId,
}) {
  return (
    <Container maxWidth="md">
      {initialComments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          initialComments={initialComments}
          setInitialComments={setInitialComments}
          currentUser={currentUser}
          showModal={showModal}
          setShowModal={setShowModal}
          commentId={commentId}
          setCommentId={setCommentId}
        />
      ))}
      <CreateComment
        initialComments={initialComments}
        setInitialComments={setInitialComments}
        currentUser={currentUser}
        userImage={currentUser.image}
      />
    </Container>
  );
}

export default CommentsList;
