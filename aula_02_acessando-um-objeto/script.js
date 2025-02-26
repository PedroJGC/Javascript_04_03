/*
    OBJETO
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos;
*/

// Cria um objeto com propriedadres e métodos.
const user = {
    email: "pedro@email.com",
    age: 38,
    name: {
        first_name: "Pedro",
        surname: "Carvalho",
    },
    adress: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123"
    },
    message: () => {
        console.log("Olá, Pedro")
    }
}

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email)

// Acessando propriedades de objetos.
console.log(user.name.first_name)

// Executa o método do objeto
user.message()

// Notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()
