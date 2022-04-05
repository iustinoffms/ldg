import QuestionsModule from "ldg-car-issues-is";
import index from "ldg-car-issues-is";
import { useEffect, useState } from "react";

function Display({ question }) {
  const [displayQuestion, setDsiplayQuestion] = useState(
    question.getFirstQuestion()
  );
  const [enableButtons, setEnableButtons] = useState(true);

  function yesEvent() {
    const answer = question.sendAnswer(true);
    setDsiplayQuestion(answer);
    if (question.isOver()) setEnableButtons(false);
  }
  function noEvent() {
    const answer = question.sendAnswer(false);
    setDsiplayQuestion(answer);
    if (question.isOver()) setEnableButtons(false);
  }

  return (
    <div>
      <p id="display">{displayQuestion}</p>

      <div>
        <button id="yes" onClick={yesEvent} disabled={!enableButtons}>
          Yes
        </button>
        <button id="no" onClick={noEvent} disabled={!enableButtons}>
          No
        </button>
      </div>
    </div>
  );
}

function App() {
  const question = QuestionsModule();

  return (
    <div>
      <Display question={question} />
    </div>
  );
}

export default App;
