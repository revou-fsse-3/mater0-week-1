var myName1;
let myName2 = "";
const myName3 = "revou";

console.log(myName1, myName2, myName3);

myName1 = "Thoriq";
myName2 = "thor";
// myName3 = "revou 2";
console.log(myName1, myName2, myName3);

// camel case
let myNameInAnotherLife = 1;

// snake case
let my_name_in_another_life;

const $ = 1;
const classs = 1;
const _ = 1;
const a1 = 1;
const my_name = 1;

var myName1;
let myname2 = 1;

let check = "✅";

let onOff = false;

let human = {
  name: "Revou",
  age: 20,
  isVaccined: true,
  hobby: {
    hobby1: "sleep",
  },
};

console.log(human.hobby.hobby1);
console.log(human["age"]);

// array
let students = ["adrisa", "catur", "gusti", 1, true];
console.log(students[1]);

console.log(typeof students);

function myFunction() {
  // window.location.href = "http://www.w3schools.com";
  // console.log("tesss");
  const name = prompt("siapa nama anda?");
  console.log(name);
  // alert(`Nama saya adalah ${name}`);

  // const cat = prompt("Berapa jumlah kucing anda?");
  // console.log(cat);
  // alert(`Jumlah kucing anda ${cat}`);

  // let result = confirm("apakah anda yakin?");
  // console.log(result);
}

// feymann technique?

// make blabla function

const MY_OBJECT = { key: "value" };
// MY_OBJECT = { OTHER_KEY: "value" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);

const MY_ARRAY = [];
// MY_ARRAY = ["B"];
MY_ARRAY.push("A");
console.log(MY_ARRAY);
// alert("tes alert");
