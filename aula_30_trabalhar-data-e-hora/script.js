/*
    Métodos para trabalhar com data e hora.
*/

let date = new Date('2025-07-02T14:30:10');

// Dia da semana de 0 à 6 (Domingo é 0)
console.log(date.getDay());

// Dia do mês (0 - 30)
console.log(date.getDate());

// Mês (0 - 11)
console.log(date.getMonth() + 1);

// Ano
console.log(date.getFullYear());

// Horas
console.log(date.getHours());

// Minutos
console.log(date.getMinutes());

// Segundos
console.log(date.getSeconds());
