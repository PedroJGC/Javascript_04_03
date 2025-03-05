/*
    For in
        - Executa iterações a partir de um objeto 
        e percorre as propriedades.
*/

let person = {
  name: 'Pedro',
  surname: 'Carvalho',
  email: 'pedro@email.com',
};

for (let property in person) {
  // Exibe o nome da propriedade
  console.log(property);

  // Exibe o conteúdo
  console.log(person[property]);
}

// Exemplo com Array
let students = ['Pedro', 'João', 'Amanda'];

for (let index in students) {
  console.log(students[index]);
}
