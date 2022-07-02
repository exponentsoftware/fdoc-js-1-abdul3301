// Sample Input 1:
// n = 4
// [4,3,1]
// expected output: 2

// Sample Input 2:
// n = 7
// [3,1,5,4,2,7]
// expected output: 6

function findMissingNumber(arr, n) {
  var sum1 = (n * (n + 1)) / 2;
  var sum2 = 0;

  //   let arr = [4, 3, 1];
  for (let i = 0; i < arr.length; i++) {
    sum2 = sum2 + arr[i];
  }
  return sum2 - sum1;
}

console.log(findMissingNumber([1, 2, 3, 5], 5));
