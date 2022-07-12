import CommentsList from "./components/CommentsList";
import DeleteModal from "./components/DeleteModal";
import { useState } from "react";
import data from "./data.json";
import "./style.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [deleteReply, setDeleteReply] = useState(false);
  const [replyId, setReplyId] = useState("");

  const [initialComments, setInitialComments] = useState(data.comments);
  const currentUser = data.currentUser;

  console.log(initialComments);

  return (
    <div className="App">
      <CommentsList
        showModal={showModal}
        setShowModal={setShowModal}
        initialComments={initialComments}
        setInitialComments={setInitialComments}
        currentUser={currentUser}
        commentId={commentId}
        setCommentId={setCommentId}
        deleteReply={deleteReply}
        setDeleteReply={setDeleteReply}
        replyId={replyId}
        setReplyId={setReplyId}
      />
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        initialComments={initialComments}
        setInitialComments={setInitialComments}
        commentId={commentId}
        deleteReply={deleteReply}
        setDeleteReply={setDeleteReply}
        replyId={replyId}
        setReplyId={setReplyId}
      />
    </div>
  );
}

export default App;
