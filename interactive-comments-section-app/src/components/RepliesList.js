import Reply from "./Reply";

function RepliesList({
  comment,
  showModal,
  setShowModal,
  deleteReply,
  setDeleteReply,
  replyId,
  setReplyId,
}) {
  const replies = comment.replies;
  return replies.map((reply) => (
    <Reply
      key={reply.id}
      reply={reply}
      showModal={showModal}
      setShowModal={setShowModal}
      deleteReply={deleteReply}
      setDeleteReply={setDeleteReply}
      replyId={replyId}
      setReplyId={setReplyId}
    />
  ));
}

export default RepliesList;
