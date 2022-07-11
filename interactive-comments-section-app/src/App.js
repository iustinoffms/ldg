import CommentsList from "./components/CommentsList";
import DeleteModal from "./components/DeleteModal";
import { useState } from "react";
import data from "./data.json";
import "./style.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [commentId, setCommentId] = useState("");

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
      />
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        initialComments={initialComments}
        setInitialComments={setInitialComments}
        commentId={commentId}
      />
    </div>
  );
}

export default App;
