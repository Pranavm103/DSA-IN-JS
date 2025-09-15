/* Precedence and associativity examples */

let c = 3 * 4 + (30 / 6) * 5 ** 2;

console.log(c);

let x = 3 + 3 ** 4 / 3 ** 2 - (3 * 4) / 6;
console.log(x);

const y = ("123" + 1) * 2 ** 2 - 21 / 7;
console.log(y);

const z = "123" + 5 ** 5 / 25 ** 2 / 5;
console.log(z);

/* Conditions */

// did the code for checking if a number is even or odd

// did the code for checking if age of a person is greater than 18 or not and if greater than 18, he/she can vote else cannot vote

// == vs ===
let a = "12";
const b = 12;
let d = 12;

if (a == b) {
  console.log("Both a & b has same value");
}

if (b === d) {
  console.log("Both b & d has same value and datatype");
}

/* coded grading system using multiple if else
  if score between 80 - 100 => A
  if score between 60 - 79 => B
  if score between 40 - 59 => C
  if score below 40 => Fail
 */

/* 

*/
const dslr = 4 + "34" * " " / 5;
console.log({ dslr });

const empty = " " * 1;
console.log({ empty });
