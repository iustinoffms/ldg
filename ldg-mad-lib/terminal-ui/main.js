const madLib = require("../domain/madLib");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a noun: ", (noun) => {
  readline.question("Enter a verb: ", (verb) => {
    readline.question("Enter an adjective: ", (adjective) => {
      readline.question("Enter an adverb: ", (adverb) => {
        const result = madLib(noun, verb, adjective, adverb);
        console.log(result);
        readline.close();
      });
    });
  });
});
