
function makeAdder(num) {
    return function (x) {
        num += x;
        return num;
    }
}
const sum = makeAdder(2);

console.log(sum(8));
console.log(sum(4));
console.log(sum(15));
console.log(sum(50));


















