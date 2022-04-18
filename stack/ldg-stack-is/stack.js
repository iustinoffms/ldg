class Stack {
  constructor() {
    this.items = [];
  }
  add(element) {
    return this.items.push(element);
  }
  remove() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
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

module.exports = Stack;
