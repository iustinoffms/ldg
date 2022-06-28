let yes = document.getElementById("yes");
let no = document.getElementById("no");
let display = document.getElementById("display");
display.innerHTML = app.getFirstQuestion();

yes.addEventListener("click", () => {
  const answer = app.sendAnswer(true);
  display.innerHTML = answer;
  if (app.isOver()) {
    yes.disabled = true;
    no.disabled = true;
  }
});
no.addEventListener("click", () => {
  const answer = app.sendAnswer(false);
  display.innerHTML = answer;
  if (app.isOver()) {
    yes.disabled = true;
    no.disabled = true;
  }
});
