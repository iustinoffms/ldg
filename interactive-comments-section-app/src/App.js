import CommentsList from "./components/CommentsList";
import { useState } from "react";
import data from "./data.json";
import CreateComment from "./components/CreateComment";

function App() {
  const [initialComments, setInitialComments] = useState(data.comments);
  const [textInput, setTextInput] = useState("");
  const currentUser = data.currentUser;
  return (
    <div className="App">
      <CommentsList initialComments={initialComments} />
      <CreateComment
        initialComments={initialComments}
        setInitialComments={setInitialComments}
        currentUser={currentUser}
        textInput={textInput}
        setTextInput={setTextInput}
      />
    </div>
  );
}

export default App;
