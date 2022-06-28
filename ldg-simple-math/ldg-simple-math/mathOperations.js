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

module.exports = SimpleMathOperations;

function Calculator(a, b) {
  function sum() {
    return this.a + this.b;
  }
  function substract(a, b) {
    return this.a - this.b;
  }
}

const useCacultaor = new Calculator(a, b);

const resultOfAdd = useCacultaor.sum();

const calculator = {
  a: 2,
  b: 3,
  add: function () {
    return this.a + this.b;
  },
};
