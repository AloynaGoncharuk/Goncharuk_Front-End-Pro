
const arr = [];
const c = prompt('Введіть кількість елементів масиву');
console.log(c);

const numbers = new Array(6);
for (i = 0; i < 6; i++) {
    numbers[i] = prompt('Введіть елемент масиву');

    if (numbers[i] === null) {
        console.log('Помилка');
    }
    if (numbers[i] === '') {
        console.log('Ви не вказали елемент');
    }
}
console.log(numbers);

numbers.sort(function (a, b) {
    return a - b;
}
);
console.log(numbers);

numbers.splice(1, 3);
console.log(numbers)