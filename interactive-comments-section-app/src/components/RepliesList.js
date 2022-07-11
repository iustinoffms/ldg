import Reply from "./Reply";

function RepliesList({ comment }) {
  const replies = comment.replies;
  return replies.map((reply) => <Reply key={reply.id} reply={reply} />);
}

export default RepliesList;
