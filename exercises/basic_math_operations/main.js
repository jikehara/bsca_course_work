// 20 July 2017
// Joseph Ikehara

// console.log("Henlo World");

// my version

// function basicOp(operator, num1, num2) {
//   console.log(num1, operator, num2);
//   switch(operator) {
//     case '+':
//       return num1 + num2;
//       break;
//     case '-':
//       return num1 - num2;
//       break;
//     case '/':
//       return num1 / num2;
//       break;
//     case '*':
//       return num1 * num2;
//       break;
//     case '%':
//       return num1 % num2;
//       break;
//     default:
//       return ("Cannot define: "+operator);
//       break;
//   }
// }
//
// console.log(basicOp('+',2,3));
// console.log(basicOp('-',2,3));
// console.log(basicOp('/',2,3));
// console.log(basicOp('*',2,3));
// console.log(basicOp('%',2,3));
// console.log(basicOp('g',2,3));

// Davis' version

// function basicMath(operator, num1, num2) {
//   var operator = operator;
//   var result = 0;
//
//   if (operator === '+' ) {
//     result = num1 + num2;
//   }
//   else if (operator === '-' ) {
//     result = num1 - num2;
//   }
//   else if (operator === '/' ) {
//     result = num1 / num2;
//   }
//   else if (operator === '*' ) {
//     result = num1 * num2;
//   }
//   else if (operator === '%' ) {
//     result = num1 % num2;
//   }
//   return result;
// }
//
// console.log(basicMath('+',2,3));
// console.log(basicMath('-',2,3));
// console.log(basicMath('/',2,3));
// console.log(basicMath('*',2,3));
// console.log(basicMath('%',2,3));

// Sean's version

function seanOp(op, num1, num2) {

  if (op === '+' ) {
      return num1 + num2;
    }
    else if (op === '-' ) {
      return num1 - num2;
    }
    else if (op === '/' ) {
      return num1 / num2;
    }
    else if (op === '*' ) {
      return num1 * num2;
    }
    else if (op === '%' ) {
      return num1 % num2;
    }
}

console.log(seanOp('+',2,3));
console.log(seanOp('-',2,3));
console.log(seanOp('/',2,3));
console.log(seanOp('*',2,3));
console.log(seanOp('%',2,3));
