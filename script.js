
const numbers = [];
for (i = 0; i < 10; i++) {
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

numbers.splice(2, 3);
console.log(numbers)

