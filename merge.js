function mergeSort(array) {
  if (array.length <= 1) return array;
  
  let middle = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, middle);
  let rightHalf = array.slice(middle);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(leftHalf, rightHalf) {
  let sort = [];

  while (leftHalf.length > 0 && rightHalf.length > 0) {
    leftHalf[0] <= rightHalf[0] ? sort.push(leftHalf.shift()) : sort.push(rightHalf.shift());
  }

  return sort.concat(leftHalf).concat(rightHalf);
}

console.log(mergeSort([5, 2, 1, 3, 6]));
