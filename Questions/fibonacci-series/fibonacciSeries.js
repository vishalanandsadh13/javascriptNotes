function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 10;
let total = 0;
let series = [];
for (let i = 0; i < n; i++) {
  let fib = fibonacci(i);
  series.push(fib);
  total += fib;
}
console.log("Fibonacci series:", series.join(", "));
console.log("Total:", total);
