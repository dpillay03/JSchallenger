// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function myFunction1(a, b) {
  var sum = a + b;
  return sum;
}

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction2(a, b) {
  if (a !== b) {
    return false;
  }
  return true;
}

// Write a function that takes a value as argument
// Return the type of the value
function myFunction3(a) {
  return typeof a;
}

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction4(a, n) {
  return a[n - 1];
}
