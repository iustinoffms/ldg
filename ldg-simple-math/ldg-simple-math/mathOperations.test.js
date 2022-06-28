const SimpleMathOperations = require("./mathOperations");

describe("SimpleMathOperations", () => {
  describe("constructor", () => {
    test("should return a instance of SimpleMathOperations ", () => {
      const result = new SimpleMathOperations(2, 2);
      expect(result instanceof SimpleMathOperations).toBeTruthy();
    });
    test("should throw an error if one of the parameters is negative", () => {
      expect(() => {
        new SimpleMathOperations(2, -2);
      }).toThrowError(/invalid/);
    });
    test("should throw an error if no number is inserted", () => {
      expect(() => {
        new SimpleMathOperations("", "");
      }).toThrowError(/invalid/);
    });
    xtest("should throw an error if one of the parameters is a string", () => {
      expect(() => {
        new SimpleMathOperations(2, "2");
      }).toThrowError(/invalid/);
    });
  });
  describe("operations", () => {
    test("given two numbers should return the sum of them", () => {
      const calculator = new SimpleMathOperations(2, 2);
      const result = calculator.add();
      expect(result).toBe(4);
    });
    test("given two numbers should return the difference of them", () => {
      const calculator = new SimpleMathOperations(2, 2);
      const result = calculator.substract();
      expect(result).toBe(0);
    });
    test("given two numbers should return the product of them", () => {
      const calculator = new SimpleMathOperations(2, 2);
      const result = calculator.multiply();
      expect(result).toBe(4);
    });
    test("given two numbers should return the quotient of them", () => {
      const calculator = new SimpleMathOperations(2, 2);
      const result = calculator.divide();
      expect(result).toBe(1);
    });
  });
});
