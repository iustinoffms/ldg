class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    return this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    return (this.items = []);
  }
  display() {
    return this.items;
  }
}

module.exports = Queue;
