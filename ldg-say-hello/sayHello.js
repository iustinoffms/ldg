function sayHello(name) {
  if (name === "") return "Hello Stranger!";
  return `Hello ${name}`;
}

module.exports = sayHello;
