/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  function isAdult(age) {
    if (age >=18) {
        return 'Adult' ;
     } else {
        return 'Minor' ;
     }
  }

  console.log('Exercise 2 Result:', isAdult(21));

  function isCharAVowel(vowel) {
    if (vowel= 'a'||'e'||'i'||'o'||'u') {
        return 'True' ;
    }
    else {
        return 'false'
    }
  }
  console.log('Exercise 3 Result:', isCharAVowel("a"));

  function generateEmail(name, domain) {
    return name + '@' + domain;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`

}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


const maxOfThree = function(num1, num2, num3) {
    if(num1 > num2&& num1 > num3 ) {
    return num1;
    } else if (num2> num1 && num2 > num3) {
     return num2
    } else {
    return num3
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function calculateTip (billAmount, tipPercentage ) {
    return (billAmount * tipPercentage ) / 100;
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

