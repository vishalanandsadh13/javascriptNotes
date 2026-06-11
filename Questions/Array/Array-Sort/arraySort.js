 function sortArrary(arr){
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray;
} 
let arr = [5, 2, 9, 1, 5, 6];
console.log("Original array:", arr);
console.log("Sorted array:", sortArrary(arr));      
