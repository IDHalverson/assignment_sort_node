const insert = (sortedArray, length, valueToInsert) => {
  // length >= 0 && sortedArray[length] > valueToInsert
  //   ? insert(
  //       sortedArray.splice(length + 1, 0, sortedArray[length]),
  //       --length,
  //       valueToInsert
  //     )
  //   : sortedArray.splice(length + 1, 0, valueToInsert);

  while (length >= 0 && sortedArray[length] > valueToInsert) {
    sortedArray[length + 1] = sortedArray[length];
    length--;
  }
  sortedArray[length + 1] = valueToInsert;
  return sortedArray;
};

const insertionSort = (arrayToSort, sortedArray = []) => {
  arrayToSort.forEach(element =>
    insert(sortedArray, sortedArray.length - 1, element)
  );
  return sortedArray;
};

console.log(insertionSort([1, 3, 7, 9, 5, 3, 5, 2, 4, 8, 4, 3, 2, 4, 5]));

module.exports = insertionSort;
