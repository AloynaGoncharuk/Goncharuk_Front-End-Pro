
const a = prompt('number 1 ?', '8');
const b = prompt('number 2 ?', '15');
const c = prompt('number 3 ?', '10');

alert(`num1: ${a}\nnum2: ${b}\nnum3: ${c}`)

const myFunc = (a, b, c) => {
    return ((a + b + c) / 3)
}
const result = myFunc(8, 15, 10);
alert(result)