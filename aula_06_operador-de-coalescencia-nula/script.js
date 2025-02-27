/*
    OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operando do
    lado direito quando o seu operador do lado 
    esquerdo é undefined. Caso contrário,
    ele retorna o seu operando do lado esquerdo.
*/
 
let content = undefined
console.log(content ?? "Conteúdo padrão")

const user = {
    name: "Pedro",
    avatar: undefined
}

console.log(user.avatar ?? "default.png")
