window.onload = function () {
  // console.log("window is fully loaded");

  // set variables
  var testVar = "test var";
  let testLet = "test let";
  const testConst = "test const";

  // Variable types
  // String
  // let name = "Chris";
  // Number
  // let age = 26;
  // Boolean
  // let learning = true;
  // null
  // let x = null;
  // undefined
  // let y = undefined;
  // array
  // let arr = [1, 2, 3, 4];

  // console.log(typeof y);

  // Strings
  // console.log("Hello, my name is " + name);
  // console.log(`Hello, my name is ${name}`);

  // String methods
  // let s = "Hello World";
  // console.log(s.toUpperCase());
  // console.log(s.toLowerCase());
  // sArr = s.split(" ");
  // console.log(sArr[0]);
  // console.log(sArr[1]);

  // Arrays
  // let numbersArr = new Array(1, 2, 3, 4, 5);
  // let stringsArr = ["one", "two", "three"];
  // let allArr = [1, "two", true, 3, "hi"];

  // console.log(numbersArr.length);
  // console.log(allArr[4]);
  // console.log(stringsArr[3]);
  // stringsArr.push("five");
  // console.log(stringsArr[3]);
  // console.log(stringsArr[4]);
  // stringsArr[4] = "six";
  // console.log(stringsArr[4]);
  // console.log(stringsArr.indexOf("three"));
  // console.log(stringsArr.indexOf("seven"));

  // Numbers
  // console.log(2 + 2);
  // console.log(2 - 2);
  // console.log(2 * 2);
  // console.log(2 / 2);
  // console.log(2 % 2);
  // console.log(2 ** 3);
  // let startNum = 1

  // console.log(startNum + 1);
  // startNum = startNum + 1;
  // startNum += 1;
  // startNum++;
  // console.log(startNum);

  // Objects
  // let person = {
  //   fname: "Christopher",
  //   lname: "Bergstrom",
  //   age: 26,
  //   sayHi: function () {
  //     console.log(`Hi, my name is ${this.fname} ${this.lname}`);
  //   }
  // }

  // person.city = "Morongo Valley";

  // console.log(person);
  // console.log(person.lname);
  // console.log(person.city);
  // person.sayHi();

  // class Person {
  //   constructor(fname, lname, age) {
  //     this.fname = fname;
  //     this.lname = lname;
  //     this.age = age;
  //   }
  // }

  // let myDog = new Person("Fiona", "Bergstrom", "4 months");
  // console.log(myDog.fname);

  // Loops 

  // For
  // let forEachArr = [1, 2, 3, 4, 5];
  // let forEachArr = ["Hi", "my", "name", "is", "Chris"];
  // for (let i = 0; i < 10; i++) {
  // for (let i = 0; i < forEachArr.length; i++) {
  //   console.log(i);
  //   console.log(forEachArr[i]);
  // }

  // While
  // let i = 10;
  // while (i > 0) {
  //   console.log(i);
  //   i--;
  // }

  // Do While
  // let i = 10;
  // do {
  //   console.log(i);
  //   i--;
  // } while (i < 10 && i >= 0)

  // forEach
  // let forEachArr = [1, 2, 3, 4, 5];
  // let forEachArr = ["Hi", "my", "name", "is", "Chris"];
  // forEachArr.forEach(function (item) {
  //   console.log(item);
  // });

  // Conditionals

  // if else if else
  // let i = 10;
  // if (i > 10) {
  //   console.log("number is greater than 10");
  // }
  // if (i < 10) {
  //   console.log("number is less than 10")
  // }
  // if (i == 10) {
  //   console.log("number is equal to 10")
  // }

  // if (i > 10) {
  //   console.log("number is greater than 10");
  // } else if (i < 10) {
  //   console.log("number is less than 10")
  // } else {
  //   console.log("number is equal to 10")
  // }

  // and && or ||
  // let i = 12;
  // if (i > 0 && i < 10) {
  //   console.log("number is between 0 and 10");
  // } else {
  //   console.log("number is NOT between 0 and 10");
  // }

  // let name = "Chris";
  // if (name == "Chris" || name == "Fiona") {
  //   console.log("equals");
  // }

  // ternary
  // let isCool = true;
  // let name;
  // (isCool) ? name = "Chris" : name = "Fiona";
  // console.log(name);

  // switch
  // let score = 9;
  // switch (score) {
  //   case 10:
  //     console.log("100%")
  //     break;
  //   case 9:
  //     console.log("90%")
  //     break;
  //   case 8:
  //     console.log("80%")
  //     break;
  //   case 7:
  //     console.log("70%")
  //     break;
  //   case 6:
  //     console.log("60%")
  //     break;
  //   case 5:
  //     console.log("50%")
  //     break;
  //   case 4:
  //     console.log("40%")
  //     break;
  //   case 3:
  //     console.log("30%")
  //     break;
  //   case 2:
  //     console.log("20%")
  //     break;
  //   case 1:
  //     console.log("10%")
  //     break;
  //   default:
  //     console.log("0%")
  //     break;
  // }

  // functions
  // add
  // function add(num1, num2) {
  //   // console.log(num1 + num2);
  //   return (num1 + num2);
  // }
  // add(1, 2);
  // console.log(add(1, 2));

  // arrow functions
  // let introduceYourself = function(name, emotion) {
  //   console.log(`Hello, my name is ${name} and I am ${emotion}`)
  // }

  // let introduceYourself = (name, emotion) => {
  //   console.log(`Hello, my name is ${name} and I am ${emotion}`)
  // }

  // If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
  // let introduceYourself = (name, emotion) => `Hello, my name is ${name} and I am ${emotion}`;

  // introduceYourself("Chris", "coding");
  // console.log(introduceYourself("Chris", "coding"));

  // Even shorter if only one value
  // let addTen = num => num + 10;
  // console.log(addTen(5));

  // Works well with arrays
  // let chores = ["take out trash", "wash dishes", "walk dog"];
  // chores.forEach((chore) => console.log(chore));

}