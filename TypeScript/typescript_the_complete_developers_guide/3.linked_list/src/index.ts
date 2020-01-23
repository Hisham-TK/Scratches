import { NumbersCollection } from "./classes/NumbersCollection";
import { Sorter } from "./classes/Sorter";

let numbersCollection = new NumbersCollection([3, 0, -1, 10]);
let sorterNumber = new Sorter(numbersCollection);

console.log("before: ", numbersCollection.data);
sorterNumber.sort();
console.log("after: ", numbersCollection.data);

// let arrNum = new Sorter([0, 5, -1, 10, 8, 3, 1]);
// let arrStr = new Sorter("cBa");
// console.log("red".split(""));
// arrNum.sort();
// arrStr.sort();
