/*
    Array
        - Quais elementos que um array aceita
*/

let myArray = [
  'Um texto',
  10,
  true,
  function () {
    console.log('função dentro o Array!');
  },
  {
    name: 'Pedro',
    email: 'pedro@email.com',
  },
];

// Texto
console.log(myArray[0]);

// Número
console.log(myArray[1]);

// Boolean
console.log(myArray[2]);

// Função
myArray[3]();

// Objeto
console.log(myArray[4].name, myArray[4].email);
