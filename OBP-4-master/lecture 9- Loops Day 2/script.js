/* Program to find the factorial of N */
let N = 5;
let factorial = 1;

for(let i = 1; i <= N; i++){
  factorial *= i;
}

console.log({factorial});

/* Check if N is prime or not - TC: O(N) */
N = 117;
let divisorsCount = 0;

for(let i = 1; i <= N; i++){
  if(N % i == 0)
    divisorsCount ++;
}

const message = (divisorsCount > 2) ? "Non - prime number" : "Prime number";
console.log(N + " is a " + message);



/* ============== break keyword ============== */

/* 
Print numbers from 100 to 200, and immediately stop when a number divisible by 17 comes 
i.e. print 100, 101 (don't even print 102, which is divisible by 17)
*/
const divisor = 17;
for(let i = 100; i <= 200; i++){
  if(i % divisor == 0){
    break;
  }
  console.log(i);
}

/* ============== continue keyword ============== */
/* Print the square of all numbers from 1 to 100, except the numbers divisible by 17 */

for(let i = 1; i <= 100; i++) {
  console.log(i);
  if(i % divisor == 0)
    continue;

  console.log(i**2);
}

/* Print all odd numbers from 1 to 200 that are divisible by 5 --> use continue*/
for(let i = 1; i <= 200; i++) {
  if(i%2 == 0 || i%5 != 0) 
    continue;
  
  console.log(i);
}

/* Print first 10 odd numbers from 1 to 200 that are divisible by 5 --> use ?*/
let count = 0;

for(let i = 1; i <= 200; i++) {
  if(i%2 == 0 || i%5 != 0) 
    continue;
  if(count == 10)
    break;
  count ++;
  console.log(i);
}

/* =========== Nested For Loops ============= */

N = 10;
let M = 10;

// write a program to print 10 '*'
let starString = "";
for(let i = 0; i < N; i++)
  starString += "*";
console.log(starString);

//write a program to print 10 lines of (10 '*' in one line)
for(let i = 0; i < M; i++){
  let starString = "";
  for(let j = 0; j < N; j++)
    starString += "*";
  console.log(starString);
}

/* 
Print below pattern

1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
*/


//STEP - 1: program to print 1 2 3 4 5 6
N=6;

let numString = "";
for(let i = 0; i < N; i++) {
  numString += i+1+ " ";
}
console.log(numString);

/* Bonus question, guess the output
const val = 1 + 3 + " ";
console.log({val}); 
*/

// STEP 2: write a for loop that runs 6 times and add STEP 1 inside this loop
M=6;

for(let i = 0; i < M; i++){
  let numString = "";
  for(let j = 0; j < N; j++) {
    numString += j+1+ " ";
  }
  console.log(numString);
}

/* H.W.
Print this pattern:

A.
*****
****
***
**
*


B. 
1
1 2 
1 2 3 
1 2 3 4
1 2 3 4 5 
1 2 3 4 5 6
*/


/* ============== do-while loop ============== 
- first executes the statements inside do block, then checks for condition inside while, 
  if this condition is true, the do block will again be executed, else it'll stop there.
- NOTE: even though the condition is false, the statements under do block, will execute once
*/



do {
  console.log("Hi, I'm do while loop!!");
} while (false);



let response;
let responseCounter = 0;
do {
  response = prompt("Do you want to continue? Count:" + responseCounter);
  console.log({response});
  responseCounter++;
} while (response == "Yes" || response == "yes");

/* similar code using while loop 
response = prompt("Do you want to continue? Count:" + responseCounter);

while (response == "Yes" || response == "yes"){
    response = prompt("Do you want to continue? Count:" + responseCounter);
    console.log({response});
    responseCounter++;
} */