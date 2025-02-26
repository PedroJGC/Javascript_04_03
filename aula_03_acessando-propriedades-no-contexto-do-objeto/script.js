/*
    OBJETO
        - Acessando propriedades no contexto do objeto
*/

const user = {
    name: "Pedro",
    email: "pedro@email.com",
    // "this." não funciona com arrow function
    message: function () {
        // console.log(`Olá ${user.name}`)
        console.log(`Olá ${this.name}`) 
    }
}

user.message()
