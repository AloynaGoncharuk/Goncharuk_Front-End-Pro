
const operator = prompt('What operation do you want to do? +  -  *  /');
let userNum1 = prompt('Enter the first number');
userNum1 = Number(userNum1);

let userNum2 = prompt('Enter the second number');
userNum2 = Number(userNum2);

if (operator == '+') {
    alert(`'${userNum1} + ${userNum2}= ${userNum1 + userNum2}'`);
}
else if (operator == '-') {
    alert(`'${userNum1} - ${userNum2}= ${userNum1 - userNum2}'`);
}
else if (operator == '*') {
    alert(`'${userNum1} * ${userNum2}= ${userNum1 * userNum2}'`);
}
else if (operator == '/') {
    alert(`'${userNum1} / ${userNum2}= ${userNum1 / userNum2}'`);
}