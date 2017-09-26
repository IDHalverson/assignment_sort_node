const bubbleSort = arrayToSort => {
  let i = 0;
  let finished = false;
  let changes = 0;
  let item1;
  let item2;

  while (!finished) {
    changes = 0;
    while (arrayToSort[i + 1] >= 0) {
      item1 = arrayToSort[i];
      item2 = arrayToSort[i + 1];
      if (item1 > item2) {
        arrayToSort[i] = item2;
        arrayToSort[i + 1] = item1;
        changes++;
      }

      i++;
    }
    if (changes === 0) {
      finished = true;
    }
    i = 0;
  }
  return arrayToSort;
};

// console.log(bubbleSort([1, 3, 7, 2, 5]));
// [1,2,3,5,7]

module.exports = bubbleSort;
