
// Задача 1
for (let i = 20; i < 30; i = i + 0.5) {
    console.log(i)
}

// Задача 2
const a = 27
for (let b = 10; b <= 100; b = b + 10) {
    console.log(a * b)
}

// Задача 3
const num = prompt('Enter number', 249)
console.log(`${num}`)

for (let x = 1; x <= 100; x++) {
    if (x ** 2 < num) {
        console.log(x);
    }
}

// Задача 4
const num1 = prompt('Enter number', '9')
console.log(`${num1}`)

function isPrime(num1) {
    for (i = 2; i < num1; i++); {
        if (num1 % i === 0) {
            return false;
        }
        else if (num1 % i != 0) {
            return true;
        }
    }
}
console.log('9', isPrime(9))

// Задача 5
const num2 = prompt('Enter number', '546')
console.log(`${num2}`)

function isNumberTrue(num2) {
    while (num2 % 3 == 0) {
        num2 /= 3;
    }
    return num2 == 1;
}
console.log(isNumberTrue(546))