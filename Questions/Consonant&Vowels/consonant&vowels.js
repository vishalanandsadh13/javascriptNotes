function consonantAndVowels(str) {
  let vowels = "aeiouAEIOU";
  let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (consonants.includes(char)) {
      consonantCount++;
    } 
  }
  return `Vowels: ${vowelCount}, Consonants: ${consonantCount}`; 

} 
let inputString = "Hello World!";
let result = consonantAndVowels(inputString);
console.log(result);  