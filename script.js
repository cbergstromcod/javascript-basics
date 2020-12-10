window.onload = () => {
  // console.log("window is fully loaded");

  // set variables
  var testVar = "test var";
  let testLet = "test let";
  const testConst = "test const";

  // Variable types
  // String
  let name = "Chris";
  // Number
  let age = 26;
  // Boolean
  let learning = true;
  // null
  let x = null;
  // undefined
  let y = undefined;
  // array
  let arr = [1, 2, 3, 4];

  // console.log(typeof y);

  // Strings
  // console.log("Hello, my name is " + name);
  // console.log(`Hello, my name is ${name}`);

  // String methods
  let s = "Hello World";
  // console.log(s.toUpperCase());
  // console.log(s.toLowerCase());
  // sArr = s.split(" ");
  // console.log(sArr[0]);
  // console.log(sArr[1]);

  // Arrays
  let numbersArr = new Array(1, 2, 3, 4, 5);
  let stringsArr = ["one", "two", "three"];
  let allArr = [1, "two", true, 3, "hi"];

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
  let startNum = 1

  // console.log(startNum + 1);
  // startNum = startNum + 1;
  // startNum += 1;
  // console.log(startNum);

  // Objects
  let person = {
    fname: "Christopher",
    lname: "Bergstrom",
    age: 26,
    sayHi: function () {
      console.log(`Hi, my name is ${this.fname} ${this.lname}`);
    }
  }

  person.city = "Morongo Valley";

  console.log(person);
  console.log(person.lname);
  console.log(person.city);
  person.sayHi();

  class Person {
    constructor(fname, lname, age) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
    }
  }

  let myDog = new Person("Fiona", "Bergstrom", "4 months");
  console.log(myDog.fname);

  myFunction();

  function myFunction() {
    // testVar = "newTestVar";
    // testLet = "newTestLet";
    // testConst = "newTestConst";
    // console.log(testVar);
    // console.log(testLet);
    // console.log(testConst);
  }

}