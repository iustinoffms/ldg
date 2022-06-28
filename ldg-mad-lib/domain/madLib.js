function madLib(noun, verb, adjective, adverb) {
  inputValidation();
  return `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;

  function inputValidation() {
    if (!noun) {
      throw new Error("Insert a noun");
    }
    if (!verb) {
      throw new Error("Insert a verb");
    }
    if (!adjective) {
      throw new Error("Insert a adjective");
    }
    if (!adverb) {
      throw new Error("Insert a adverb");
    }
  }
}

module.exports = madLib;
