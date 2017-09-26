const quickSort = arr =>
  arr.length < 2
    ? arr
    : quickSort(arr.filter(e => e < arr[0]))
        .concat([arr[0]])
        .concat(quickSort(arr.filter(e => e > arr[0])));

const array = [4, 2, 7, 9, 3, 1, 0];
const result = quickSort(array);
console.log(result);
