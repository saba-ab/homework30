// 2

const arr = ["sakamoto", "temple", 1015, "pharmacy", 997, "jungle"];
const arrLength = arr.length;
console.log(arrLength);
const arrPopped = arr.pop();
console.log(arrPopped);
const arrPushed = arr.push("firefly"); // აბრუნებს ახალი მასივის სიგრძეს
console.log(arr);
console.log(arrPushed);
const arrShifted = arr.shift(); // აგდებს მასივიდან პირველ ელემენტს და ინახავს ამ ცვლადში
console.log(arrShifted);
const arrUnshifted = arr.unshift("shadow"); // ამატებს ელემენტს პირველ ადგილზე და ახალ ცვლადში ინახავს მასივის სიგრძეს
console.log(arrUnshifted);
console.log(arr);
arr[0] = "kordz";
arr[arrLength] = "osamu";
console.log(arr);
delete arr[0]; // შლის პირველ ელემენტს მაგრამ ტოვებს ცარიელ ადგილს
console.log(arr);
const arrConcated = arr.concat(arrUnshifted, arrShifted);
console.log(arrConcated);
const arrayToFlat = [
  ["sabana", "yes", "yes"],
  [997, 125, "flower"],
];
const arrFlated = arrayToFlat.flat();
console.log(arrFlated);
const arrSpliced = arrFlated.splice(1, 2, "no", "no");
console.log(arrSpliced);
console.log(arrFlated);
arr.splice(0, 1); // წავლშალეთ ცარიელი ელემენტი
console.log(arr);
const arrSliced = arr.slice(2, 5);
console.log(arrSliced);
const arrString = arr.toString();
console.log(arrString);

// 3

const personsArr = [
  {
    firstName: "saba",
    lastName: "abzhandadze",
    profession: "web developer",
    age: 22,
    point: 78,
  },
  {
    firstName: "giorgi",
    lastName: "kakabadze",
    profession: "web designer",
    age: 32,
    point: 73,
  },
  {
    firstName: "dito",
    lastName: "gambashidze",
    profession: "game developer",
    age: 25,
    point: 79,
  },
];

const fullNames = personsArr.map(
  (person) => `${person.firstName} ${person.lastName}`
);
console.log(fullNames);

const doublePoint = personsArr.map((person) => person.point * 2);
console.log(doublePoint);

// 4

const points = [];
personsArr.forEach((person) => {
  points.push(person.point);
});
const sum = points.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
