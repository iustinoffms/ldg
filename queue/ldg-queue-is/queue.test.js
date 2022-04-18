const Queue = require("./queue");

describe("Queue", () => {
  test("should be an instance of class", () => {
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });
  test("given an empty array, enqueue method should add a new value at the end of the array", () => {
    const queue = new Queue();
    queue.enqueue(2);
    const result = queue.display();

    expect(result).toEqual([2]);
  });
  test("given an empty array, dequeue method should remove the first item from the array", () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.dequeue();
    queue.enqueue(5);
    queue.enqueue(9);
    queue.dequeue();
    const result = queue.display();

    expect(result).toEqual([9]);
  });
  test("given an empty array, peek method should display the first item from the array", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5000);
    const result = queue.peek();
    expect(result).toBe(3);
  });
  test("given an empty array, isEmpty method should return true if the array is empty", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.dequeue();
    const result = queue.isEmpty();
    expect(result).toBe(true);
  });
  test("given an empty array, size method should return array's size", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(333);
    const result = queue.size();
    expect(result).toBe(2);
  });
  test("given an array with added values, clear method should empty the array", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(333);
    const result = queue.clear();
    expect(result).toEqual([]);
  });
});
