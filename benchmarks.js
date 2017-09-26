const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const mergeSort = require("./mergeSortSmall");

const benchmark = (array, iterations) => {
  const bubbleStart = Date.now();
  for (let i = 0; i < iterations; i++) {
    bubbleSort(array);
  }
  const bubbleFinish = Date.now();
  const bubbleResult = bubbleFinish - bubbleStart;

  const insertionStart = Date.now();
  for (let j = 0; j < iterations; j++) {
    insertionSort(array);
  }
  const insertionFinish = Date.now();
  const insertionResult = insertionFinish - insertionStart;

  const mergeStart = Date.now();
  for (let k = 0; k < iterations; k++) {
    mergeSort(array);
  }
  const mergeFinish = Date.now();
  const mergeResult = mergeFinish - mergeStart;

  console.log("bubble took:", bubbleResult);
  console.log("insertion took:", insertionResult);
  console.log("merge took:", mergeResult);
};
