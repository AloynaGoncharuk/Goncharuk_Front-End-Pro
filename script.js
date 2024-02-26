
'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
if (typeof key !== 'string')
    throw new Error('Expected string result');
if (key.length !== 16)
    throw new Error('Expected 16 characters in result');

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i



// ({
//     name: 'generateKey',
//     length: [200, 210],
//     test: generateKey => {
//         const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//         const key = generateKey(16, characters);
//         if (typeof key !== 'string') throw new Error('Expected string result');
//         if (key.length !== 16) throw new Error('Expected 16 characters in result');
//     }
// })

module.exports = { generateKey };