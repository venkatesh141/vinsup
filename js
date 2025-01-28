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
