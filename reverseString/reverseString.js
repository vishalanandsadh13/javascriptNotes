function reverseString(str){
return str.split("").reverse().join("");
};

let str = "Helllo vishal";
let reversed = "";

for (let i = str.length-1; i>0 ; i-- ){
  reversed += str[i];
}

console.log(reversed);