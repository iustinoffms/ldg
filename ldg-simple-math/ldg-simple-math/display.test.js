const display = require("./display");

describe("display", () => {
  test("given two inputs should return an array with all operations", () => {
    const result = display(2, 2);
    expect(result).toEqual([
      "2 + 2 = 4",
      "2 - 2 = 0",
      "2 * 2 = 4",
      "2 / 2 = 1",
    ]);
  });
});
