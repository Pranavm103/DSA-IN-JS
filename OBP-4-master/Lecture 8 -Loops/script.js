/* 
Last class 
- ternary operator
- number is positive/negative
- greater of two number
- number to weekdays
- highest scorer student
- a number is even or odd
- grading system
- nested ternary
- greater of three numbers
- switch case
*/


/* Print "HI" */
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");
console.log("Hi!!");

/* Issues in repeating code 
- too much work for developer
- chances of error
- unable to count the number of repetition
- too much work to update "Hi" to "Hii"
*/

/* To solve these issues, we can use Loops */

/* While */
let count = 10;
while(count > 0) {
  console.log("Hi");
  count--;
}
//Time complexity: O(count) OR O(10)
/* Excercise: print counting from 1 to 10
1
2
3
4
5
..
10
 */
console.log("Printing numbers from 1 to 10");
let num = 0;
while (num != 10){
  console.log(num + 1);
  num ++;
}
//Time complexity: O(10) or O(20)

/* Print all even numbers till 25 */
console.log("Printing all even numbers from 1 to 25");
num = 0;
while (num < 25) {
  if(num % 2 == 0) 
    console.log(num);
  num ++;
}
//Time complexity: O(25)

console.log("Printing all even numbers from 1 to 25");
num = 0;
while (num < 25) {
  console.log(num);
  num += 2;
}
//Time complexity: O(25/2) or O(13)

/* countdown from 10 to 1 */
console.log("Countdown from 10 to 1");
count = 10;
while (count != 0){
  console.log(count);
  count--;
}
//Time complexity: O(count)

/* //infinite loop
count = 10;
while (count != 0){
  console.log(count);
  count++;
} */


/* ============== FOR Loop ============== */
//print Hi 10 times
for(let i = 0; i < 10; i++){
  console.log("Hi");
}
//Time Complexity -> O(10);


/* Print counting from 1 to 10 */
let n = 10;
for(let i = 0; i < n; i++){
  console.log(i + 1);
  console.log(i + 1);
  console.log(i + 1);
  console.log(i + 1);
}
//Time compleity -> O(n) or O(4n)

/* print multiples of 3 only upto 50 --> print 3, 6, 9, ... 48 */
n = 50;
let i;
//no curly braces {} are required to execute single statements
//we can use a variable already declared inside for loop (i)
for(i = 0; i < n; i++)  
  if(i%3 == 0)
  console.log(i);

//Time complexity: O(n)

n = 50;
for(i = 3; i < n; i+=3) 
  console.log(i);

//Time complexity: O(n/3)

/* Print the squares of each number from 20 to 35 */
n = 15;
let start = 20;

for(let i = 20; i <= 35; i++)
  console.log(i*i);
//TC -> O(16)

for(let i = start; i <= start + n; i++){
  console.log(i*i);
  //console.log(i**2);
}
//TC -> O(n) => [(start + n) - start]

/* Task: Print table of 5 using for loop

5 * 1 = 5
5 * 2 = 10
..
..
5 * 10 = 50

*/

num = 5;
for(let i = 1; i <= 10; i++) {
  console.log(num + " * " + i + " = " + num * i);
}

//TC = O(10)

/* Find sum of first 100 numbers and print it */
let sum100 = 0;

for(let i = 1; i <= 100; i++){
  sum100 += i; // sum = 1+2+3+4...+100
}

console.log(sum100);


/* ================ Conditions related extra things ================ */

/* Read about short circuiting in JS */

const n1 = false && 5;
const n2 = n1 === false && 34; //34
const n3 = n2 && "67";
const n4 = true && n2 == 34 && 45 && n1 == false; //H.W.
//n2 = true && 34 --> n2 = 34;
//n4 = true && true && 45 && true --> n4 = true?
const n5 = (n1 == false && n2 == 34) || (n3 == false && n4 == true);

console.log({n1, n2, n3, n4, n5});

const condition = Number("23")*1;
if(condition)
  console.log(condition + " is true");
else 
  console.log(condition + " is false");