//Diamond Problem

// let pattern = "";
// for( let i = 1; i<=n; i++){
//     for(let j = 1; j<n-1; j++){
//         pattern = " ";
//     }
// }

/* Slice */ //shift alt a

/*  let arr = [2,10,6,4,9];
console.log(arr.slice(1,4));  //doesnt change the original array
console.log(arr.slice(1));


console.log(arr.splice(1, 3));// changes the orginal array */

/* let arr2 = [-3,-4,-5,-6,-10];
console.log(arr.concat(arr2)); */ //muliple arrays concatination

/* ============= types of loops for array ================== */

// basic loop
/* for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
    
} */

//for ... in loop
// for(let index  in arr){
//     console.log(arr[index]);
//     /* console.log(value); */
//     //Console.log(typeOf Index) --> typeOf Index here is "String"
// }

//for ... of loop
/* for(let value of arr)console.log(value);
 */
//Write a Function which prints the prefix sum of array
//input : [12,4,-8,10]

/* function prefix() {
    let arr = [12, 4, -8, 10];
    let sum = 0;
    let result = [];

    for (let index in arr) {
        sum += arr[index];    
        result.push(sum);
    }

    console.log(result);
}
prefix(); */

/* Swapping to Values */

/* let a = 10, b = 20;
console.log({a,b})
    let temp = a;
    a=b;
    b=temp;
console.log({a,b}) */

/* Swapping two values of an array
input : arr = [1,2,3,4,5],ind1 = 1, ind2 = 4
output : arr = [1,5,3,4,2] */

/* function swapArr(arr, ind1, ind2){
    let n = arr.length;
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
    console.log({arr});

}
arr = [1,2,3,4,5];
swapArr(arr, 1,4);
 */

//print elements at odd indices of an array
/* input1 arr = [1,2,3,4,5] --> odd length Array
output1 : 2,4

input2 arr = [1,2,3,4,5,6] --> even length Array
output2 : 2,4,6 */

function printOddIndexElements(arr) {
  let n = arr.length;

  /* method1
    for(let i =0; i<n; i++){
        if(i% 2 ==1)console.log(arr[i]);
    } */
  for (let i = 1; i < n; i += 2) console.log(arr[i]);
}
let arr = [1, 2, 3, 4, 5, 6];

console.log("Odd indexed elements: ");
printOddIndexElements(arr);

/* swap alternate elements of an array */
function swapAlternateElements(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i += 2) {
    temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }
  console.log({ arr });
}
swapAlternateElements(arr);

/* Hetrogeneous property ofArrays in JS */

arr = [1,2,"124",2.454,true,[3,4,"five",[2,5,"printMe"]]];

//How to print "printMe" from above array

console.log(arr[5][3][2]);

/* Question : Given an array of consecutive numbers, but there's on number thats missing,find it
input: [1,2,3,5,6,7,8]
output: 4 */

let arr1 = [1,2,3,5,6,7,8];


/* subarray : it is a contigous part of an array*/



