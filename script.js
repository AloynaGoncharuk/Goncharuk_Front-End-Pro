
function generateKey(length) {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charLength = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}
console.log(generateKey(16));

