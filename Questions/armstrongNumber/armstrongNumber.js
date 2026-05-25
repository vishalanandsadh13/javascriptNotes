function armstrongNumber(num){
  let sum = 0;
  let temp = num;
  let digits = num.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

let num = 153;
if (armstrongNumber(num)) {
  console.log(`${num} is an Armstrong number.`);  
} else {
  console.log(`${num} is not an Armstrong number.`);
} 