const questions = {
  FirstQuestion: "Is the car silet when you turn the key?",
  YesBranchFirstQuestion: "Are the battery terminals corroded?",
  NoBranchFirstQuestion: "Does the car make a clicking noise?",
  NoBranchSecondQuestion: "Does the car crank up but fail to start?",
  NoBranchThirdQuestion: "Does the engine start and then die?",
  NoBranchForthQuestion: "Does your car have fuel injection?",
};

const solutions = [
  "Clean the terminals and try starting again.",
  "Replace cables and try again.",
  "Replace the battery.",
  "Check spart plug connections.",
  "Get it in for service.",
  "Check to ensure the choke is opening and closing",
];

function QuestionsModule() {
  let currentAnswers = "";

  function getFirstQuestion() {
    return questions.FirstQuestion;
  }

  function sendAnswer(answer) {
    currentAnswers += answer === true ? "y" : "n";
    return check();
  }

  function check() {
    if (currentAnswers === "y") return questions.YesBranchFirstQuestion;
    if (currentAnswers === "n") return questions.NoBranchFirstQuestion;
    if (currentAnswers === "yy") return solutions[0];
    if (currentAnswers === "yn") return solutions[1];
    if (currentAnswers === "nn") return questions.NoBranchSecondQuestion;
    if (currentAnswers === "ny") return solutions[2];
    if (currentAnswers === "nnn") return questions.NoBranchThirdQuestion;
    if (currentAnswers === "nny") return solutions[3];
    if (currentAnswers === "nnnn") return "Start over";
    if (currentAnswers === "nnny") return questions.NoBranchForthQuestion;
    if (currentAnswers === "nnnyy") return solutions[4];
    if (currentAnswers === "nnnyn") return solutions[5];
    return "Start over";
  }

  function isOver() {
    return solutions.includes(check()) || check() === "Start over";
  }

  return { sendAnswer, getFirstQuestion, isOver };
}

module.exports = QuestionsModule;
