let arr = [];
while (arr.length < 7) {
  let num = Math.floor(Math.random() * 10);
  arr.findIndex((item) => item == num) == -1 && arr.push(num);
}
console.log(arr);

// let numbers = [2, 3, 4, 5, 6];
// for (let i = 1; i <= 7; i++) {
//   let random = Math.floor(Math.random() * i);
//   let exist = arr.find((abc) => abc == random);
//   if (exist == random) {
//     arr.push(Math.floor(Math.random() * i + numbers[i]));
//   } else {
//     arr.push(Math.floor(Math.random() * i));
//   }
// }
// console.log(arr);
