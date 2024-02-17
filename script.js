// Version 1

const numbers = [1, 2, 3, 4, 5, 6, 7];
const index = numbers.indexOf(5);

console.log(numbers);
console.log(index);

const elem = numbers.splice(4, 1);
function removeElement(numbers, elem) {
    const index = numbers.indexOf(elem);
    if (index > -1) {
        numbers.splice(index, 1);
    }
}
removeElement(numbers, 5)
console.log(numbers);

// Version 2

const fruits = ['banan', 'mango', 'pear', 'orange', 'apple', 'lemon', 'plum'];
const index1 = fruits.indexOf('pear');

console.log(fruits);
console.log(index1);

const n = fruits.splice(2, 1);
function removeElement(fruits, n) {
    const index1 = fruits.indexOf(n);
    if (index1 > -1) {
        fruits.splice(2, 1);
    }
}
removeElement(fruits, 'pear')
console.log(fruits);


