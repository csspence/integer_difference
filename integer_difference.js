/*
Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
*/

const intDiff = (arr, n) => {
  const newArr = arr.sort(function(a, b) {
    return a - b;
  });
  let sum = 0;
  for(let i = 0; i < newArr.length - 1; i++) {
    for(let h = i + 1; h < newArr.length; h++) {
      if(((newArr[h] - newArr[i]) === n) || ((newArr[i] - newArr[h]) === n)) {
        sum++;
      }
    }
  }

  return sum;
}