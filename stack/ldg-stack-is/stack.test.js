const Stack = require("./stack");

describe("Stack", () => {
  test("should be an instance of class", () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });
  test("given an empty array, add method should add a new value at the end of the array", () => {
    const stack = new Stack();
    stack.add(2);
    const result = stack.display();

    expect(result).toEqual([2]);
  });
  test("given an empty array, remove method should remove the last item from thearray", () => {
    const stack = new Stack();

    stack.add(2);
    stack.add(3);
    stack.add(8);
    stack.remove();
    const result = stack.display();

    expect(result).toEqual([2, 3]);
  });
  test("given an empty array, peek method should display the last item from the array", () => {
    const stack = new Stack();
    stack.add(3);
    stack.add(5000);
    const result = stack.peek();
    expect(result).toBe(5000);
  });
  test("given an empty array, isEmpty method should return true if the array is empty", () => {
    const stack = new Stack();
    stack.add(3);
    stack.remove();
    const result = stack.isEmpty();
    expect(result).toBe(true);
  });
  test("given an empty array, size method should return array's size", () => {
    const stack = new Stack();
    stack.add(3);
    stack.add(234);
    const result = stack.size();
    expect(result).toBe(2);
  });
  test("given an array with added values, clear method should empty the array", () => {
    const stack = new Stack();
    stack.add(3);
    stack.add(234);
    const result = stack.clear();
    expect(result).toEqual([]);
  });
});
