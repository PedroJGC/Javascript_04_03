/*
    Array
        - Usando o índice
*/

let fruits = ["Aplle", "Watermelon", "Lemon", "Strawberry"]

// Encontra e retorna o índice do elemento no Array.
let position = fruits.indexOf("Lemon")
console.log(position)

// Remove um item pela posiçãodo índice (1 é o número de itens para remover)

// fruits.splice(1, 2)
fruits.splice(position, 1)
console.log(fruits)
