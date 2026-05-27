function reverseNumber(num) {
  let reversed = 0;
  let temp = Math.abs(num); 
  console.log("temp", temp);
  
  while (temp > 0) {
    reversed = reversed * 10 + temp % 10;
    temp = Math.floor(temp / 10);
    console.log("reversed", reversed);
    console.log("temp1",temp);
  }
  
  return num < 0 ? -reversed : reversed;
} 

let num = -12345;
let reversedNum = reverseNumber(num);
console.log(reversedNum); 

