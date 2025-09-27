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


function prefix() {
    let arr = [12, 4, -8, 10];
    let sum = 0;
    let result = [];

    for (let index in arr) {
        sum += arr[index];    
        result.push(sum);
    }

    console.log(result);
}
prefix(); 



/* Subarray */

/* let arr = [1, 2, 3,4,5];
function printSubarrays(arr) {

  let n = arr.length;

  for (let i = 0; i < n; i++) {      
    let subarray = [];
    for (let j = i; j < n; j++) {     
      subarray.push(arr[j]);          
      console.log(subarray);
    }
  }
}
printSubarrays(arr); */

let arr = [1, 4, 5, 7, 3, 2];
function printSubarrays(arr) {
  let n = arr.length;

  for (let size = 1; size <= n; size++) {
    let group = [];
    for (let i = 0; i <= n - size; i++) {
      let subarray = arr.slice(i, i + size);
      group.push(subarray);
    }
    console.log(`Size ${size}:`, group);
  }
}

printSubarrays(arr);



