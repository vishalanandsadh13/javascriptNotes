Data Types
JavaScript is a powerful and flexible language used for both client-side and server-side programming. One of the key concepts in JavaScript is the use of data types. In this article, we will explore the various data types available in JavaScript, their usage, and how to work with them.

What Are Data Types?
In programming, data types refer to the kind of value a variable can hold. In JavaScript, data types can be broadly categorized into two groups: primitive and non-primitive data types. Understanding these data types is essential as they determine how values are stored and manipulated in your program.

1. Strings
A string is a data type used to represent textual data. A string is any set of characters enclosed in quotes, either single (') or double ("), or even backticks (`).




let username = "Prakash";
console.log(username); // Outputs: Prakash

Output
Prakash
If you omit the quotes, JavaScript will treat the text as a variable name, which will cause an error if the variable is not defined.




let username = Prakash;
To determine the type of a variable, you can use the typeof operator:




console.log(typeof username);

Output
undefined
2.Numbers
The number data type is used to represent numeric values. In JavaScript, numbers can be integers or floating-point (decimals).




let age = 25;
console.log(typeof age); // Outputs: number
​
let price = 99.99;
console.log(typeof price); // Outputs: number

Output
number
number
If you enclose numbers in quotes, they become strings.




let numberString = "123";
console.log(typeof numberString)

Output
string
3. Boolean
A Boolean data type has only two possible values: true or false. It is typically used to perform conditional checks or represent binary states, such as whether a product is in a shopping cart or not.




let isProductInCart = true;
console.log(typeof isProductInCart);  // Output: boolean

Output
boolean


A Boolean can be checked directly in a conditional statement:


if (isProductInCart) {
  console.log("Product is in the cart.");
} else {
  console.log("Product is not in the cart.");
}


If you try to use "true" or "false" in quotes, they will be treated as strings:


let isProductInCart = "true";  // treated as a string
console.log(typeof isProductInCart);  // Output: string


4.Undefined
The undefined data type is used when a variable is declared but not yet assigned a value. JavaScript automatically assigns the value undefined to such variables.




let username;
console.log(username); // Outputs: undefined
console.log(typeof username); // Outputs: undefined

Output
undefined
undefined
5. Null
The null data type is used to represent the intentional absence of any value. It is explicitly set to indicate that a variable should have no value.




let user = null;
console.log(user); // Outputs: null
console.log(typeof user); // Outputs: object

Output
null
object
6. Objects
An object is a non-primitive data type used to store collections of data. Objects can hold multiple values as key-value pairs. You can create an object using curly braces {}.




const person = {
    name: "Prakash",
    age: 25,
    education: "Engineer"
};
console.log(typeof person); // Outputs: object

Output
object
7. Arrays
An array is a special type of object used to store ordered collections of values. Arrays are defined using square brackets [].




const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);

Output
object
Summary of Data Types
Here are the primary data types we discussed:

String: Text enclosed in quotes.
Number: Integers or floating-point numbers.
Boolean: True or false values.
Undefined: Variables declared but not assigned a value.
Null: Represents "no value."
Object: Non-primitive type for storing collections of data.
Array: A special type of object for storing lists of values.