function anagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2 ? "The strings are anagrams." : "The strings are not anagrams. ";
}

str1 = "listen";
str2 = "silent";  

console.log(anagram(str1, str2));