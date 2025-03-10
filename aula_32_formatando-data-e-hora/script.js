/*
    Formatando uma data e hora.
*/

let date = new Date('2024-07-02T14:30:00');

// Formata para o dia sempre ter 2 dígitos
let day = date.getDate().toString().padStart(2, '0');
console.log(day);

// Formata para o mês sempre ter 2 dígitos
let month = (date.getMonth() + 1).toString().padStart(2, '0');
console.log(month);

let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

console.log(`${day}/${month}/${year} às ${hours}:${minutes}`);
