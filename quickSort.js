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

module.exports = mergeSort;

console.log(quickSort([1, 7, 2, 9, 5]));
