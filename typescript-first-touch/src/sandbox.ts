// const character = "iustin";
// console.log(character);

// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => console.log(input));

let character = "iustin";
let age = 31;
let isBlackBelt = false;

character = "mihai";
age = 32;
isBlackBelt = true;

const circumference = (diameter: number) => diameter * Math.PI;

console.log(circumference(3.12312312312));

let mixed: (number | string)[] = ["titi", "tina", 3];

mixed.push(3);
mixed.push("dada");

let ninja = { name: "iustin", belt: "black", age: 31 };
ninja.name = "new_name";

// ninja.anotherProp = "22"; // does not work

//in ts we cannot change the struncture of the object

//arrays

let array: any[] = [];
array.push(22);
array.push("iustin");

let array2: (string | number)[] = [];
// array2.push(true); // does not work

//union
let uid: number | string;
uid = "123";
uid = 123;
// uid = true // does not work

let person: object;

person = {
  name: "iustin",
  age: 22,
};

let student: {
  age: number;
  name: string;
  is_active: boolean;
  status?: string;
} = {
  name: "iustin",
  age: 22,
  is_active: true,
  //   town: "iasi", does not work
  //status can be missed
};

console.log("pwla");
