
function middleNumberArr() {
    const array = ['phone', 'banan', 'moon', 2, 1, 4, 9, 45, 95, 7, 13, 5, 25, 'lesson'];
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            count += 1;
            sum += array[i];
        }
        console.log(count);
    }
    return number = sum / count;
}

const result = middleNumberArr();
console.log(result);