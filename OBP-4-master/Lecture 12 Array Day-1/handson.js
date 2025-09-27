function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(4));


const name1 = "Name1";
const name2 = "Name2";
const name3 = "Name3";
const name4 = "Name4";
const name5 = "Name5";
const name6 = "Name6";
const name7 = "Name7";
const name8 = "Name8";
const name9 = "Name9";
const name10 = "Name10";

const names = [
  "Name1",
  "Name2",
  "Name3",
  "Name4",
  "Name5",
  "Name6",
  "Name7",
  "Name8",
  "Name9",
  "Name10",
];

let n = names.length;
console.log("Length of names array:", n);


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
n = arr.length;

let sum = sumOfArray(arr);
console.log({ sum });

function sumOfArray(arr) {
  let n = arr.length,
    sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}


function evenOddDiff(arr) {
  /* let n = arr.length;
  let evenSum = 0,
    oddSum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    } else oddSum += arr[i];
  }

  return Math.abs(evenSum - oddSum);
 */
  /* OR */
  let n = arr.length;
  let evenSum = 0,
    oddSum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    }
  }
  oddSum = sumOfArray(arr) - evenSum;
  return Math.abs(evenSum - oddSum);
}

console.log("Absolute difference of Even and Odd elements:", evenOddDiff(arr));