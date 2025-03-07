/*
    Exibindo data e hora de acordo com a localidade.
*/

let date = new Date('2024-07-02T14:30:00');

// Exibe a data e hora no formato local.
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// Exibe a data e hora no formato local.
console.log(date.toLocaleDateString('en'));
console.log(date.toLocaleTimeString('en'));
