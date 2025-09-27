let arr = [7, 4, 8, 6, 5];

function sumOfAllSubarrays(arr, k) {
  let n = arr.length;
  let totalSum = 0;

  for (let i = 0; i <= n - k; i++) {
    let subarray = arr.slice(i, i + k);
    let sum = subarray.reduce((a, b) => a + b, 0);
    console.log(`Subarray: [${subarray}] -> Sum = ${sum}`);
    totalSum += sum;
  }

  console.log("Total Sum of all subarray sums of size", k, "=", totalSum);
}

sumOfAllSubarrays(arr, 3);

//print the values of 4 from the array

const array1 = [arr, 1, "85", "try", [2, [4, 5]], 32];
const array2 = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];

console.log(array1[1][1]);
console.log(
  "Checking is array is  an array or not using Array.isArray() method",
  Array.isArray(array1)
);

if (Array.isArray(array1[4])) {
  if (Array.isArray(array1[4][1])) {
    console.log("Printing 4", array1[4][1][0]);
  }
}
//if array is matrix or not

function isMatrix(arr) {
  let firstRowLength = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length != firstRowLength) return false;
  }
  return true;
}
console.log(isMatrix(array1));
console.log(isMatrix(array2));

arr = [3, 2, 4, 1, 9];
/* function reversed(arr , start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    console.log(arr);

} */

function reversed(arr) {
  return arr.reverse();
}
console.log(reversed(arr));

//Reverse each row of nested 2d array
/* input : [
    [1, 2],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];
output : [
    [2, 1],
    [5, 4, 3, 2],
    [6, 5, 4, 3],
]; */

function reversedEachRow(arr) {
  let n = arr.length;
  for (let i = 0; i <= n; i++) {
    let m = arr[i].length;
    for (let j = 0; j < Math.floor(m / 2); j++) {
        [arr[i][j], arr[i][m-1-j]]
    }
  }
}
/* ===================H.W========================== */
/* H.W -> Reverse columns of a 2D matrix
 
input: [
          [1, 2, 3, 4],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ]
output: 
  3 2 1
  4 3 2
  5 4 3
  6 5 4
*/

function reverseColumns(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let c = 0; c < cols; c++) {
    let line = [];
    for (let r = rows - 1; r >= 0; r--) {
      line.push(matrix[r][c]);
    }
    console.log(line.join(" "));
  }
}

// test
let matrix = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];

reverseColumns(matrix);

