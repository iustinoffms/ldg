const SimpleMathOperations = require("./mathOperations");

function display(a, b) {
  const calculate = new SimpleMathOperations(a, b);
  let newArr = [];
  const results = [
    { value: calculate.add(), operator: "+" },
    { value: calculate.substract(), operator: "-" },
    { value: calculate.multiply(), operator: "*" },
    { value: calculate.divide(), operator: "/" },
  ];

  for (let i = 0; i < results.length; i++) {
    newArr.push(`${a} ${results[i].operator} ${b} = ${results[i].value}`);
  }
  return newArr;
}

module.exports = display;
