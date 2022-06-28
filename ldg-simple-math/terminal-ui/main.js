const { text } = require("stream/consumers");
const display = require("../ldg-simple-math/display");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("What is the first number? ", (a) => {
  readline.question("What is the second number? ", (b) => {
    const textOutput = display(a, b).join("\r\n");
    console.log(textOutput);
    readline.close();
  });
});
