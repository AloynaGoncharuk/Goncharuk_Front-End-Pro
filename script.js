// Version 1
const numbers = [24, 122, 55, 13, 3, 88]
numbers.sort(function (a, b) {
    return a - b;
}
);
console.log(numbers)

numbers.splice(2, 3);
console.log(numbers)

// Version 2
const cities = ['London', 'Kyiv', 'Paris', 'Berlin', 'Warsaw', 'Bratislava']
cities.sort();
console.log(cities)

cities.splice(2, 3);
console.log(cities)