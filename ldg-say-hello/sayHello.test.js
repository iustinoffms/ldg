const sayHello = require("./sayHello");

describe("sayHello", () => {
  test("given a name should return a Hello name", () => {
    //Arrange
    const name = "Bogdan";

    //Act
    const result = sayHello(name);

    //Assert
    expect(result).toBe("Hello Bogdan");
  });
  test("given empty string should return Hello Stranger!", function () {
    //Arrange
    const name = "";

    //Act
    const result = sayHello(name);

    //Assert
    expect(result).toBe("Hello Stranger!");
  });
});
