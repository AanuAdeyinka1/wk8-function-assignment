// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

//  A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// I created a function to check prime number
// if the the number is divide and equals to 1, then it is not a prime number and it should return false;
// if the number equals 2, then it should return true which means that the number equals 2.
//  I created a for loop and set the value of my num parameter to 40 in the console
function checkPrimeNumber(num) {
  if (num == 1) {
    return false;
  } else if (num == 2) {
    return true;
  } else {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(checkPrimeNumber(7));
