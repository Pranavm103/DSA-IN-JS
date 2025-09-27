function printSubarray(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    for (let j = i; j < n; j++) {
      subarr.push(arr[j]);
      console.log(subarr.join(" "));
    }
  }
}
printSubarray([1, 4, 5, 7, 3, 2]);



/* Function to print the sum of all subarrays */
 

function printsumsubarray(arr) {
  let n = arr.length;
  let allSubArraySum = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;    
    for (let j = i; j < n; j++) {
      sum += arr[j]; 
      allSubArraySum += sum;
      console.log(sum);  
    }
  }
  console.log(allSubArraySum);
}
printsumsubarray([1, 4, 5, 7, 3, 2]);

/* Write a function to print the subarray whose sum is target sum (=T)
input = [1,4,5,7,3,2],  T= 15
output = [5,7,3] */


 /* print the subarray with sum = target sum*/
/* function findTargetSumSubarray(arr, T){
 
  let sum = printSubarray(arr);
  if(sum === T){
    console.log(findTargetSumSubarray(arr, 17));
  }

}  */

for(let i = 0; i < 3; i++){
  let str = "";
  for(let j= 1; j<=5; j++){
    str += j+5*i+" ";
  }console.log(str);
}

arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15 ]
];

console.log("Printing 2D Array");
let totalsum =0;
for(let i = 0; i< arr.length; i++){
  str = "";
  let sum =0;
  
  for(let j = 0; j < arr[i].length; j++){
    str += arr[i][j] + " ";
    sum += arr[i][j];
  }
  console.log(str);/* Print the sum of array */

  console.log(sum); 
  totalsum += sum;
  console.log(totalsum);
  
}

/* print the sumof product of all the Elements
 */
/* sum = 0;
for(let i = 0; i< arr.length; i++){
  str = "";
  let product = 1;
  for(let j = 0; j < arr[i].length; j++){
    str += arr[i][j] + " ";
    product *= arr[i][j];

  }console.log(str);
  console.log(product);
  sum += product;
}
console.log(sum);
 */
/* Print Matrix column wise */

/* arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

for (let j = 0; j < arr[0].length; j++) {    
  let str = "";
  for (let i = 0; i < arr.length; i++) {    
    str += arr[i][j] + " ";
  }
  console.log(str);
} */

function printDiagonals(arr) {
  let n = arr.length;
  let sum = 0;

  console.log("Primary Diagonal:");
  for (let i = 0; i < n; i++) {
    console.log(arr[i][i]);
    sum += arr[i][i];
    if(sum % 2 !== 0){
      
    }
  }
  console.log(sum);
  console.log("sum is odd");

  console.log("Secondary Diagonal:");
  for (let i = 0; i < n; i++) {
    console.log(arr[i][n - 1 - i]);
  }
}

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

printDiagonals(arr);

/* function to check if primary diagonal sum is odd or even
 */











