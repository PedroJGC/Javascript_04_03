/*
    OBJETO
        OPTIONAL CHAINING (?.) - encadeamento opcional
        Se a propriedade ou função chamada é nullish
        (null or undefined), a expressão retorna 
        undefined em vez de gerar um erro.

        Útil ao explorar o conteúdo de um objeto  
        quando não existe a garantia de existência de 
        determinadas propriedades obrigatórias.
*/

const user = {
    id: 1,
    name: "Pedro",
    /*address: {
        street: "Avenida Brasil",
        city: "São Paulo",
        geo: {
            latitude: 47.808,
            longitude: 17.5674,
        },
    },
    message: function () {
        console.log(`Olá, ${this.name}`)
    }*/
}

console.log(user?.address?.street) // retorna undefined

user.message?.() // não retorna nada
