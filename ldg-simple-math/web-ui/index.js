const firstNrField = document.getElementById("first-number");
const secondNrField = document.getElementById("second-number");
const calculateButton = document.getElementById("calculate-button");
const displayResults = document.getElementById("display-results");

calculateButton.addEventListener("click", function (e) {
  e.preventDefault();

  const results = display(firstNrField.value, secondNrField.value);
  console.log(results);
  displayResults.innerHTML = results
    .map((item) => {
      return `<p>${item}</p>`;
    })
    .join("");
});
