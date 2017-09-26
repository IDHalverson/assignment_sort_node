const merge = (leftArr = [], rightArr = [], sorted = []) => {
  while (leftArr.length && rightArr.length) {
    sorted.push((leftArr[0] < rightArr[0] ? leftArr : rightArr).shift());
  }
  return sorted.concat(leftArr[0] ? leftArr : rightArr);
};

const mergeSort = unsortedArray =>
  unsortedArray.length < 2
    ? unsortedArray
    : merge(
        mergeSort(unsortedArray.slice(0, Math.floor(unsortedArray.length / 2))),
        mergeSort(
          unsortedArray.slice(
            Math.floor(unsortedArray.length / 2),
            unsortedArray.length
          )
        )
      );

// console.log(mergeSort([1, 3, 7, 2, 5, 1, 4, 5, 7, 3, 3, 3, 3, 3, 21, 2, 2, 3]));

module.exports = mergeSort;
