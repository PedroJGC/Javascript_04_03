/*
    Função construtora
*/

function createProduct(name) {
    const product = {}

    product.name = name
    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}

// O new cria um novo objeto (instância) utilizando a estrutura da função construtora
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

console.log("----------------------------")

// Aqui deveria ser usando classes, mas vou estudar classes um pouco mais a frente
function Person(name) {
    this.name = name
    this.message = function() {
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person("Pedro")
console.log(person1.name)
person1.message()

const person2 = new Person("João")
console.log(person2.name)
person2.message()