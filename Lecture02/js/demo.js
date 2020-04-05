// Comparison operators
var x = 5
var y = 4
5 == 5        // Returns true
5 == 4        // Returns false
x == x        // Returns true
x == y        // Returns false
x > y         // Returns true
x < y         // Returns false
x >= x        // Returns true
x <= x        // Returns true

const str1 = 'cat'
const str2 = 'dog'
str1 == str2   // Returns false
str1 != x      // Returns true

// Equal signs
const str3 = '5'
x == str3       // Returns true
x === str3      // Returns false
x = y           // Assigns the value stored in y to x

null == undefined   // Returns true
null === undefined  // Returns  false

// Logical operators
true && true    // Returns true
true && false   // Returns false
false && true   // Returns false also

false || true   // Returns true
true || false   // Returns true
true || true    // Returns true
false || false  // Returns false

// This is a block statement
{
  console.log("statement 1");
  console.log("statement 2");
}

// This is also a block statement
{
  console.log("Also a block a statement");
}

// if...else
var a = 2
var b = 3

// Simple if statement
if (a < b)
  console.log("a is less than b");

// Execute multiple statements
if (a < b) {
  console.log("a is less than b");
  console.log("a is " + a + " and b is " + b);
  console.log(`${a} is less than ${b}`);
}

// One statement
if (a < b) {
  console.log("a is less than b");
} // Good practice to block even one statement

// else clause
a = 4
if (a < b) {
  console.log("a is less than b");
} // Nothing happens!

// We use else clause
if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is greater than b");
}

// elseif clause
a = 3
if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is greater than b");
} // Nothing happens!

// We use elseif
if (a < b) {
  console.log("a is less than b");
} else if (a > b) {
  console.log("a is greater than b");
} else if (a == b){
  console.log("a is equal to b");
}

// Also valid
if (a < b) {
  console.log("a is less than b");
} else if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is equal to b");
}

// Nested if
a = 2
b = 3
var c = 4
var d = 5
// Scenario: I want to check if (c < d) but only if (a < b)
if (a < b) {
  console.log("a is less than b");
  if (c < d) {
    console.log("c is also less than d");
  } else {
    console.log("but c is greater than d");
  }
}

// Nested if solves the issue present here
if (a < b) {
    console.log("a is less than b");
} else if ((a < b) && (c < d)) {
    console.log("a is less than b");
    console.log("c is also less than d");
} else if ((a < b) && (c > d)) {
    console.log("a is less than b");
    console.log("but c is greater than d");
}

// We can just do this right?
if ((a < b) && (c < d)) {
    console.log("a is less than b");
    console.log("c is also less than d");
} else if ((a < b) && (c > d)) {
    console.log("a is less than b");
    console.log("but c is greater than d");
} else if (a < b) {
    console.log("a is less than b");
}

d = 3 // Rerun above
d = 4 // Rerun above

// switch statement
a = 2
b = 3
c = 6
d = 5

// Using the above example

switch (true){
  case ((a < b) && (c < d)):
    console.log("a is less than b");
    console.log("c is also less than d");
  case ((a < b) && (c > d)):
    console.log("a is less than b");
    console.log("but c is greater than d");
  case (a < b):
    console.log("a is less than b");
  default:
    console.log("a is greater than b");
}

// Why break is important
switch (true){
  case ((a < b) && (c < d)):
    console.log("a is less than b");
    console.log("c is also less than d");
    break;
  case ((a < b) && (c > d)):
    console.log("a is less than b");
    console.log("but c is greater than d");
    break;
  case (a < b):
    console.log("a is less than b");
    break;
  default:
    console.log("a is greater than b");
    break;
}   // Can also be nested

d = 3 // Rerun above
d = 4 // Rerun above

/* Another switch example - suppose the user has typed in and the string is
  stored in input
*/
var input = 'Tuesday'
switch (input){
  case 'Monday':
    console.log("It is the first day of the week.");
    break;
  case 'Tuesday':
    console.log("It is the second day of the week.");
    break
  case 'Wednesday':
    console.log("It is the third day of the week.");
    break;
  case 'Thursday':
    console.log("It is the fourth day of the week.");
    break;
  case 'Friday':
    console.log("It is the fifth day of the week.");
    break;
  case 'Saturday':
    console.log("It is the sixth day of the week.");
    break;
  case 'Sunday':
    console.log("It is the seventh day of the week.");
    break;
  default:
    console.log("No such day!");
    break;
}

// Ternary operator - if...else statement
a = 2
b = 3
c = 4
d = 5
(a > b) ? console.log("a is greater than b") : console.log("a is less than b")

// Ternary operator - if...else if...else
a < b ? console.log("a is less than b")
: a > b ? console.log("a is greater than b")
: console.log("a is equal to b")


// Ternary for handling null
var e = null
e ? console.log(`The value of e is ${e}`) : console.log("e is falsy!")

e = 10 // Rerun above
