const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const mergeSort = require("./mergeSortSmall");
let insertionStart;
let insertionFinish;
let insertionResult;
let mergeStart;
let mergeFinish;
let mergeResult;
let bubbleStart;
let bubbleFinish;
let bubbleResult;

let array = [];
let totalNumber = 2;
for (let i = 0; i < totalNumber; i++) {
  array.push(Math.floor(Math.random() * totalNumber));
}

const iterations = 10000;

const bubbleTest = () => {
  bubbleStart = Date.now();
  for (let i = 0; i < iterations; i++) {
    bubbleSort([...array]);
  }
  bubbleFinish = Date.now();
  return bubbleFinish - bubbleStart;
};
const insertionTest = () => {
  insertionStart = Date.now();
  for (let j = 0; j < iterations; j++) {
    insertionSort([...array]);
  }
  insertionFinish = Date.now();
  return insertionFinish - insertionStart;
};
const mergeTest = () => {
  mergeStart = Date.now();
  for (let k = 0; k < iterations; k++) {
    mergeSort([...array]);
  }
  mergeFinish = Date.now();
  return mergeFinish - mergeStart;
};

bubbleResult = bubbleTest();
insertionResult = insertionTest();
mergeResult = mergeTest();

console.log("bubble took:", bubbleResult);
console.log("insertion took:", insertionResult);
console.log("merge took:", mergeResult);
