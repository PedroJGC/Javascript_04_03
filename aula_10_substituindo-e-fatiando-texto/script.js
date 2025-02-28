/*
    String
        - Replace
        - Slice
        - Trim
*/

let message = "Estou estudando os fundamentos do Javascript."

// Substituindo parte de um texto.
console.log(message.replace("Javascript", "HTML"))

// Extraindo uma parte da string (start, end)
console.log(message.slice(0, 6))
console.log(message.slice(6, 30))

// Extraindo uma parte da string de trás para frente
console.log(message.slice(-11))

let textWithSpace = "   Texto de exemplo    "
console.log(textWithSpace.length)
console.log(textWithSpace.trim().length)
