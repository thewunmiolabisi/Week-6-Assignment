// Question 1. Create a function that checks if the input/parameter is an even number.

function checkNum(num) {
  if(num % 2 === 0) {
    console.log(`${num} is an even number`);
  }else{
    console.log(`${num} is not an even number`);
  }
  
}
checkNum(2);
checkNum(4);
checkNum(5);
checkNum(6);

// Question 2. Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter.

function printNum(n1, n2) {
  if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
      console.log(i);
    }
  } else if (n1 > n2) {
    for (let i = n1; i >= n2; i--) {
      console.log(i);
    }
  } else {
    console.log(n1);
    console.log(n2);
   }
}
printNum(2, 6);

// Question 3. Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.

function calcFunc(num1, num2) {
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  return sum;
}

console.log(calcFunc(1, 3));