const { TestWatcher } = require("jest");
const QuestionsModule = require("./index");

describe("QuestionModule", () => {
  test("getFirstQuestion should return <Is the car silet when you turn the key?>", () => {
    // Arrage
    const question = QuestionsModule();

    // Act
    const firstQuestion = question.getFirstQuestion();

    // Assert
    expect(firstQuestion).toBe("Is the car silet when you turn the key?");
  });
  test("given the first question and answer <yes> should return <Are the battery terminals corroded?>", () => {
    // Arrage
    const question = QuestionsModule();
    const yes = true;

    // Act
    const result = question.sendAnswer(yes);

    // Assert
    expect(result).toBe("Are the battery terminals corroded?");
  });
  test("given the question Are the battery terminals corroded? and answer <yes> should return <Clean the terminals and try starting again.>", () => {
    // Arrage
    const question = QuestionsModule();
    yes = true;

    question.sendAnswer(yes);
    const result = question.sendAnswer(yes);

    // Assert
    expect(result).toBe("Clean the terminals and try starting again.");
  });
  test("given the question <Are the battery terminals corroded?>  and answer <no> should return <Replace cables and try again.>", () => {
    // Arrage
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act

    question.sendAnswer(yes);
    const noAnswer = question.sendAnswer(no);
    // Assert
    expect(noAnswer).toBe("Replace cables and try again.");
  });
  test("given the first question and answer <no> should return <Does the car make a clicking noise?>", () => {
    // Arrage
    const question = QuestionsModule();
    answer = false;

    // Act
    const noAnswer = question.sendAnswer(answer);

    // Assert
    expect(noAnswer).toBe("Does the car make a clicking noise?");
  });
  test("given the question <Does the car make a clicking noise?> and the answer <yes> should return <Replace the battery.> ", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    result = question.sendAnswer(yes);
    // Assert
    expect(result).toBe("Replace the battery.");
  });
  test("given the question <Does the car make a clicking noise?> and the answer <no> should return <Does the car crank up but fail to start?> ", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    result = question.sendAnswer(no);
    // Assert
    expect(result).toBe("Does the car crank up but fail to start?");
  });
  test("given the question <Does the car crank up but fail to start?> and the answer <yes> should return <Check spart plug connections.>", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    question.sendAnswer(no);
    result = question.sendAnswer(yes);
    // Assert
    expect(result).toBe("Check spart plug connections.");
  });
  test("given the question <Does the car crank up but fail to start?> and the answer <no> should return <Does the engine start and then die?>", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    question.sendAnswer(no);
    result = question.sendAnswer(no);
    // Assert
    expect(result).toBe("Does the engine start and then die?");
  });
  test("given the question <Does the engine start and then die?> and the answer <yes> should return <Does your car have fuel injection?>", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    question.sendAnswer(no);
    question.sendAnswer(no);
    result = question.sendAnswer(yes);
    // Assert
    expect(result).toBe("Does your car have fuel injection?");
  });
  test("given the question <Does the engine start and then die?> and the answer <no> should return <Start over>", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    question.sendAnswer(no);
    question.sendAnswer(no);
    result = question.sendAnswer(no);
    // Assert
    expect(result).toBe("Start over");
  });
  test("given the question <Does your car have fuel injection?> and the answer <no> should return <Check to ensure the choke is opening and closing>", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    question.sendAnswer(no);
    question.sendAnswer(no);
    question.sendAnswer(yes);
    result = question.sendAnswer(no);
    // Assert
    expect(result).toBe("Check to ensure the choke is opening and closing");
  });
  test("given the question <Does your car have fuel injection?> and the answer <yes> should return <Get it in for service.>", () => {
    // Arrange
    const question = QuestionsModule();
    const yes = true;
    const no = false;

    // Act
    question.sendAnswer(no);
    question.sendAnswer(no);
    question.sendAnswer(no);
    question.sendAnswer(yes);
    result = question.sendAnswer(yes);
    // Assert
    expect(result).toBe("Get it in for service.");
  });
});
