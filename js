What is JavaScript (JS)?
JavaScript is a programming language used to make websites interactive.

Think of a static website as a skeleton. JavaScript adds life to it—it lets you interact with the page by clicking buttons, entering data, or seeing animations.

Simple Analogy:
A web page without JavaScript is like a toy car without batteries—you can see it, but you can't play with it.
JavaScript adds the batteries, making the car move and perform actions!

What Can JavaScript Do?
Here are a few things JavaScript can do:

Make the webpage interactive
Example: Clicking a button shows an alert or hides a section.
Respond to user actions
Example: When you type in a form, JavaScript checks if it's valid.
Create animations
Example: A menu slides in and out, or an image changes automatically.
Fetch data from servers
Example: Display live scores or weather updates without refreshing the page.
--------------------------------------------------
  Javascript operators
JavaScript Operators
The Assignment Operator (=) assigns a value to a variable:

Assignment Examples
let x = 10;
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
JavaScript Addition
The Addition Operator (+) adds numbers:

Adding
let x = 5;
let y = 2;
let z = x + y;
JavaScript Multiplication
The Multiplication Operator (*) multiplies numbers:

Multiplying
let x = 5;
let y = 2;
let z = x * y;
Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators
JavaScript Arithmetic Operators
Arithmetic Operators are used to perform arithmetic on numbers:

Arithmetic Operators Example
let a = 3;
let x = (100 + 50) * a;
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
Note
Arithmetic operators are fully described in the JS Arithmetic chapter.

ADVERTISEMENT

JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

The Addition Assignment Operator (+=) adds a value to a variable.

Assignment
let x = 10;
x += 5;
Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
Note
Assignment operators are fully described in the JS Assignment chapter.

JavaScript Comparison Operators
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
Note
Comparison operators are fully described in the JS Comparisons chapter.

JavaScript String Comparison
All the comparison operators above can also be used on strings:

Example
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
Note that strings are compared alphabetically:

Example
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
JavaScript String Addition
The + can also be used to add (concatenate) strings:

Example
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
The += assignment operator can also be used to add (concatenate) strings:

Example
let text1 = "What a very ";
text1 += "nice day";
The result of text1 will be:

What a very nice day
Note
When used on strings, the + operator is called the concatenation operator.

Adding Strings and Numbers
Adding two numbers, will return the sum as a number like 5 + 5 = 10.

Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".

Example
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
The result of x, y, and z will be:

10
55
Hello5
Note
If you add a number and a string, the result will be a string!

JavaScript Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not
Note
Logical operators are fully described in the JS Comparisons chapter.

JavaScript Type Operators
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
Note
Type operators are fully described in the JS Type Conversion chapter.

JavaScript Bitwise Operators
Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	
----------------------------------------------------------------------------
1. Arrays in JavaScript
In JavaScript, arrays can hold multiple types of values, such as numbers, strings, and even other arrays.

js
Copy
Edit
const arr = [1, 2, "only", 2.2];
Here, arr is an array with different data types:

1 → Number
2 → Number
"only" → String
2.2 → Floating-point number
2. Modifying Arrays (Even When Declared as const)
In JavaScript, const does not mean that the array itself is immutable. It only means you cannot reassign a new array to the variable.
However, you can change the elements inside the array.
js
Copy
Edit
arr[0] = "two"; // Changes the first element (1) to "two"
console.log(arr); // Output: ["two", 2, "only", 2.2]
3. Adding and Removing Elements
JavaScript provides push, unshift, pop, and shift methods for adding/removing elements.

Adding Elements
js
Copy
Edit
arr.push(20); 
// Adds 20 to the end of the array
console.log(arr); // Output: ["two", 2, "only", 2.2, 20]

arr.unshift(30); 
// Adds 30 at the beginning of the array
console.log(arr); // Output: [30, "two", 2, "only", 2.2, 20]
Removing Elements
js
Copy
Edit
arr.pop();  
// Removes the last element (20)
console.log(arr); // Output: [30, "two", 2, "only", 2.2]

arr.shift();  
// Removes the first element (30)
console.log(arr); // Output: ["two", 2, "only", 2.2]
4. Searching in an Array
We can find elements using indexOf and includes.

js
Copy
Edit
console.log(arr.indexOf(1));  
// Returns the index of `1`, but since 1 is not in the array anymore, it returns -1.

console.log(arr.includes(1));  
// Returns false because 1 is not in the array.
5. slice() - Extracting a Portion of an Array
slice(start, end) → Returns a new array from the original array without modifying it.
If only one argument is given, it returns elements from that index to the end.
If negative values are given, it selects elements from the end.
js
Copy
Edit
console.log(arr.slice(2));  
// Removes first 2 elements and returns the rest
// Output: ["only", 2.2]

console.log(arr.slice(-2));  
// Returns the last 2 elements
// Output: ["only", 2.2]
6. splice() - Adding and Removing Elements
splice(index, deleteCount, item1, item2, ...)
index → Where to start
deleteCount → How many elements to remove
item1, item2, ... → Elements to insert
js
Copy
Edit
arr.splice(2, 1, 99, 100);  
// Removes 1 element at index 2 ("only") and inserts 99 and 100
console.log(arr); 
// Output: ["two", 2, 99, 100, 2.2]
7. concat() - Combining Arrays
concat() joins two or more arrays without modifying the original arrays.
js
Copy
Edit
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = a.concat(b);

console.log(c);  
// Output: [1, 2, 3, 4, 5, 6]
-----------------------------------------------------------------------

  1. Rest Operator (...)
The rest operator (...) collects multiple values into an array.
It is mostly used in function parameters.
Example 1: Collecting Function Arguments into an Array
js
Copy
Edit
function add(newone, ...students) {
    console.log("New one:", newone);
    console.log("Students:", students);
}

add("John", "Alice", "Bob", "Charlie");
Output:
sql
Copy
Edit
New one: John
Students: ["Alice", "Bob", "Charlie"]
"John" is stored in newone.
The rest of the arguments ("Alice", "Bob", "Charlie") are collected in students as an array.
Example 2: Passing an Array Using the Rest Operator
js
Copy
Edit
const students = ["Alice", "Bob", "Charlie"];
add("John", ...students);
Output:
sql
Copy
Edit
New one: John
Students: ["Alice", "Bob", "Charlie"]
...students spreads the array into separate values.
These values are collected into students inside the function.
2. Spread Operator (...)
The spread operator (...) expands an array (or iterable) into individual values.
It is mostly used for copying or merging arrays.
Example 1: Copying an Array
js
Copy
Edit
const a = [1, 3, 4];
const b = [...a];

console.log(b); // Output: [1, 3, 4]
b is a copy of a.
b is a separate array (not linked to a).
Example 2: Merging Two Arrays
js
Copy
Edit
const c = [1, 2, 3];
const d = [9, 8, 7];

const e = [...c, ...d];

console.log(e); // Output: [1, 2, 3, 9, 8, 7]
...c spreads [1, 2, 3]
...d spreads [9, 8, 7]
Both arrays are merged into e.
Final Summary
Operator	Use	Example	Output
Rest (...)	Collects multiple values into an array	function add(a, ...b) {}	b becomes an array
Spread (...)	Expands an array into individual values	const b = [...a]	Creates a copy of a

--------------------------------------------------------------------------------
  
1️⃣ Function Expression (Declaring Function to a Variable)
js
Copy
Edit
var prod = function(n1, n2) {
  return n1 * n2;
};
Here, prod is a variable that holds a function.
This function multiplies two numbers.
It is anonymous (no function name).
🔹 Usage:

js
Copy
Edit
console.log(prod(3, 4)); // Output: 12
2️⃣ Arrow Function (Shorter Syntax for Functions)
Regular Arrow Function
js
Copy
Edit
var prod = (n1, n2) => {
  return n1 * n2;
};
Same as the function expression but in a shorter way.
One-Line Arrow Function
js
Copy
Edit
var prod = (n1, n2) => n1 * n2;
When the function has only one return statement, you can remove {} and return.
🔹 Usage:

js
Copy
Edit
console.log(prod(5, 2)); // Output: 10
3️⃣ IIFE (Immediately Invoked Function Expression)
js
Copy
Edit
(function(a, b) {
  console.log(a * b);
})(4, 2);
This function runs immediately after defining it.
No need to call it separately.
Use case: When you need to run code once and avoid polluting the global scope.
🔹 Output:

Copy
Edit
8
4️⃣ Pure Function
js
Copy
Edit
function cal(n1, n2) {
  return n1 * n2;
}
A pure function always gives the same result for the same inputs.
It does not modify external variables.
🔹 Example Usage:

js
Copy
Edit
console.log(cal(5, 3)); // Output: 15
console.log(cal(5, 3)); // Always 15 (Same input, same output)
5️⃣ Impure Function
js
Copy
Edit
const discount = 22;

function cal(price) {
  return price - discount;
}
This function is impure because it depends on the external discount variable.
If discount changes, the function gives different results.
🔹 Example Usage:

js
Copy
Edit
console.log(cal(100)); // Output: 78
console.log(cal(100)); // Output changes if discount changes
🔹 Summary
Type	Explanation
Function Expression	Function stored in a variable.
Arrow Function	Shorter way to write functions.
IIFE	Runs immediately after defining.
Pure Function	Always gives same output for same input.
Impure Function	Depends on external values, so the result may change.
  -------------------------------------------------------------

  This code shows a function returning another function in JavaScript. Let’s break it down step by step:

Step 1: Defining the Outer Function
js
Copy
Edit
function greet(message) {
    return function(wishes) {
        console.log(` ${wishes} , ${message}`);  
    };
}
The greet function takes one parameter: message.
It returns another inner function that takes one more parameter: wishes.
Inside the inner function, it prints wishes followed by message.
Step 2: Calling the Function
js
Copy
Edit
const greeting = greet('i hope '); // 'i hope ' is stored as message
greet('i hope ') returns a function that expects a wishes argument.
The returned function is stored in the greeting variable.
Step 3: Calling the Inner Function
js
Copy
Edit
greeting("congrats");
This calls the returned function with "congrats" as wishes.
The output will be:
css
Copy
Edit
 congrats , i hope 
Alternate Way to Call Directly
js
Copy
Edit
greet('i hope')('congrats');
Here, we call greet('i hope'), which returns a function.
Then, we immediately call that returned function with "congrats", producing the same output.
In Simple Terms
greet() gives back a function.
That function takes another input and prints the message.
Think of it like a template:

greet("i hope") creates a sentence template waiting for another word.
greeting("congrats") fills the missing word and prints the full sentence.

  ------------------------------------------------------------------------

  Callback Function in JavaScript (Simple Explanation) 😊
A callback function is a function that is passed as an argument to another function and is executed inside that function.

Example Code:
js
Copy
Edit
function greet(wish) {
    console.log(`${wish()}, function called`);
}

function sayHi() {
    return "hi";
}

function sayHello() {
    return "hello";
}

greet(sayHi);
greet(sayHello);
Step-by-Step Explanation:
1️⃣ We define greet(wish)

This function takes another function (wish) as a parameter.
Inside greet(), it calls the wish() function and prints the output.
2️⃣ We define sayHi() and sayHello()

Both functions return a greeting ("hi" or "hello").
3️⃣ We call greet() and pass sayHi and sayHello as arguments

js
Copy
Edit
greet(sayHi);
greet(sayHello);
greet(sayHi) → Calls sayHi() inside greet() and prints "hi, function called".
greet(sayHello) → Calls sayHello() inside greet() and prints "hello, function called".
Output:
sql
Copy
Edit
hi, function called
hello, function called
🔹 Simple Summary
✔ A function (wish) is passed as an argument to another function (greet).
✔ The callback function is executed inside greet().
✔ This is useful for event handling, asynchronous programming (like setTimeout, API calls, etc.).


  -----------------------------------------------------------------------------
Concept: Higher-Order Function
A higher-order function is a function that:

Takes another function as an argument (callback function).
Returns a function or performs operations using the passed function.
Code Implementation
js
Copy
Edit
const inputs = [2, 3, 4, 5, 6, 7];

function operation(input, fn) {
    const output = [];

    for (let no of input) {
        output.push(fn(no));  // Applying function (square or cube) to each element
    }
    return output;
}

function square(no) {
    return no * no;
}

function cube(no) {
    return no * no * no;
}

// Calling the operation function with square and cube
console.log(operation(inputs, square)); // [4, 9, 16, 25, 36, 49]
console.log(operation(inputs, cube));   // [8, 27, 64, 125, 216, 343]
How It Works?
operation() is a higher-order function because it takes another function (fn) as an argument.
It loops through the inputs array and applies the given function (square or cube) to each number.
output.push(fn(no)) stores the result.
Finally, it returns the transformed array.
Alternate Approach using map()
Instead of using a loop, we can simplify using JavaScript’s map():

js
Copy
Edit
const operation = (input, fn) => input.map(fn);

console.log(operation(inputs, square));
console.log(operation(inputs, cube));
This does the same thing but in a more concise way. 🚀 Let me know if you need further clarification!

-----------------------------------------------------------------------------------------------------------





