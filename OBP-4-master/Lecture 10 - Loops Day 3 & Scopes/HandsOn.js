//loop day 4
let N = 12;
let isPrime = true;
for(let i =2; i< Math.floor(Math.sqrt(N)); i++){// i* i =N
    if( N % i == 0){
        console.log("Not Prime");
        //isPrime = false;
        //break;
    }
}
//const isPrime = isPrime ? "is prime ": "not prime";
//console.log(N + message);
N = 6
for(let i =1 ; i<=N; i++){
    let num ="";
    for(let j =1; j<= i; j++){
        num += j + "";
    }
    console.log(num);
}
