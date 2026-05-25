function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
        console.log(`Checking ${num} against ${i}`);
    }
    return true;  
}

let n = 29;
if(isPrime(n)){
    console.log(`${n} is a prime number.`); 
} else {
    console.log(`${n} is not a prime number.`);
}