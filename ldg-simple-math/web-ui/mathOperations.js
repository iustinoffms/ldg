function SimpleMathOperations(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("invalid number");
  }
  if (a === "" || b === "") {
    throw new Error("invalid number");
  }
  this.a = a;
  this.b = b;
}

SimpleMathOperations.prototype.add = function () {
  return Number(this.a) + Number(this.b);
};
SimpleMathOperations.prototype.substract = function () {
  return Number(this.a) - Number(this.b);
};
SimpleMathOperations.prototype.multiply = function () {
  return Number(this.a) * Number(this.b);
};
SimpleMathOperations.prototype.divide = function () {
  return Number(this.a) / Number(this.b);
};
