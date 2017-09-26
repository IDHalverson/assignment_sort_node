const insert = (sortedArray, sortedLength, valueToInsert) => {
  let i = sortedLength;

  while (i >= 0 && sortedArray[i] > valueToInsert) {
    sortedArray[i + 1] = sortedArray[i];
    i--;
  }
  sortedArray[i + 1] = valueToInsert;
  return sortedArray;
};

const insertionSort = arrayToSort => {
  let sortedArray = [];

  arrayToSort.forEach(element => {
    sortedArray = insert(sortedArray, sortedArray.length - 1, element);
  });

  console.log(sortedArray);
};

insertionSort([1, 3, 7, 2, 5]);
// [1,2,3,5,7]
