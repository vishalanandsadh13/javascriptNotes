function factorial(n){
  if(n<0){
    return "Factorial is not defined for negative numbers.";
  }
  if(n == 0 || n ==1){
    return 1;
  }
  return n * factorial(n-1);
}

let n = 5;
console.log(`Factorial of ${n} is:`, factorial(n));