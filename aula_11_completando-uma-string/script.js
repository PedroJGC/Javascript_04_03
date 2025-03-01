/*
    String
        - padStart
        - padEnd
*/

const creditCard = "1234567812344928"
console.log(creditCard.length)

// Pega os 4 últimos dígitos
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)

const maskedNumber = lastDigits.padStart(creditCard.length, "x")
console.log(maskedNumber)
