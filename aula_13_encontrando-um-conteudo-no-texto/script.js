/*
    String
        - indexOf
        - includes
*/

let message = 'Estou estudando os fundamentos do Javascript.';

// Obtém a posição da palavra
console.log(message.indexOf('Javascript'));

// Quando não encontra retorna -1
// console.log(message.indexOf("javascript"))

// Verifica se existe a palavra na String
console.log(message.includes('Javascript')); // true

console.log(message.includes('javascript')); // false
console.log(message.toLocaleLowerCase().includes('javascript')); // true
