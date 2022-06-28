const madLib = require("./madLib");

describe("madLib", () => {
  test("given a noun, a verb, an adjective and an adverb", () => {
    //Arrange
    const noun = "dog";
    const verb = "walk";
    const adj = "blue";
    const adv = "quickly";

    //Act
    const story = madLib(noun, verb, adj, adv);

    //Assert
    expect(story).toBe("Do you walk your blue dog quickly? That's hilarious!");
  });

  test("given no noun, should throw an error", () => {
    const noun = "";
    const verb = "walk";
    const adj = "blue";
    const adv = "quickly";

    expect(() => {
      madLib(noun, verb, adj, adv);
    }).toThrowError(/noun/);
  });
  test("given no verb, should throw an error", () => {
    const noun = "dog";
    const verb = "";
    const adj = "blue";
    const adv = "quickly";

    expect(() => {
      madLib(noun, verb, adj, adv);
    }).toThrowError(/verb/);
  });

  test("given no adjective, should throw an error", () => {
    const noun = "dog";
    const verb = "walk";
    const adj = "";
    const adv = "quickly";

    expect(() => {
      madLib(noun, verb, adj, adv);
    }).toThrowError(/adjective/);
  });

  test("given no adverb, should throw an error", () => {
    const noun = "dog";
    const verb = "walk";
    const adj = "blue";
    const adv = "";

    expect(() => {
      madLib(noun, verb, adj, adv);
    }).toThrowError(/adverb/);
  });
});
