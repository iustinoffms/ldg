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
  deleteReply,
  setDeleteReply,
  replyId,
  setReplyId,
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
          deleteReply={deleteReply}
          setDeleteReply={setDeleteReply}
          replyId={replyId}
          setReplyId={setReplyId}
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
