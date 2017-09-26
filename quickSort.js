const quickSort = array => {
  console.log(array.length);
  if (array.length < 4) {
    return array;
  } else {
    let pivot = array[0];
    console.log(pivot);
    let right = [];
    let left = [];
    array.forEach(element => {
      if (element < pivot) {
        left.push(element);
      } else {
        right.push(element);
      }
    });
    return merge(quickSort(right), quickSort(left));
  }
};

const merge = () => {};

// function merge(leftArr = [], rightArr = []) {
//   let sorted = [];
//   while (leftArr.length && rightArr.length) {
//     sorted.push((leftArr[0] < rightArr[0] ? leftArr : rightArr).shift());
//   }
//   if (leftArr.length) sorted = sorted.concat(leftArr);
//   if (rightArr.length) sorted = sorted.concat(rightArr);
//   return sorted;
// }
//
// const mergeSort = unsortedArray => {
//   const length = unsortedArray.length;
//   if (length < 2) return unsortedArray;
//   const split = Math.floor(length / 2);
//   const firstHalf = mergeSort(unsortedArray.slice(0, split));
//   const secondHalf = mergeSort(unsortedArray.slice(split, length));
//
//   return merge(firstHalf, secondHalf);
// };

// console.log(mergeSort([1, 3, 7, 2, 5, 1, 4, 5, 7, 3, 3, 3, 3, 3, 21, 2, 2, 3]));

module.exports = mergeSort;

console.log(quickSort([1, 7, 2, 9, 5]));
