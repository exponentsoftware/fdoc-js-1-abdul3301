// const printTriangle = (rowCount, symbol) => {
//   for (let i = 1; i <= rowCount; i++) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//       result = result + symbol;
//     }
//     console.log(result);
//   }
// };
// printTriangle(7, "%");

// const printTriangle = (rowCount, symbol) => {
//   for (let i = 1; i <= rowCount; i++) {
//     let result = "";
//     for (let j = rowCount; j >= i; j--) {
//       result = result + symbol;
//     }
//     console.log(result);
//   }
// };
// printTriangle(8, ":");

const printTriangle = (row, symbol) => {
  for (let i = 1; i <= row; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result = result + symbol;
    }
    console.log(result);
  }
};
printTriangle(7, "*");
