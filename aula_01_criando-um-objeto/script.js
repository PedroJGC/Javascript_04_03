/*
    OBJETO
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos;
*/

// Cria um objeto vazio.
const obj = {};
console.log(obj);
console.log(typeof obj);

// Cria um objeto com propriedadres e métodos.
const user = {
  email: 'pedro@email.com',
  age: 38,
  name: {
    first_name: 'Pedro',
    surname: 'Carvalho',
  },
  adress: {
    street: 'Rua X',
    number: 23,
    city: 'São Paulo',
    postal_code: '12345-123',
  },
  message: () => {
    console.log('Olá, Pedro');
  },
};
