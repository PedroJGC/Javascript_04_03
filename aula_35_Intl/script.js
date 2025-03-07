/*
    Intl
    - É a API de Internacionalização do ECMAScript.
*/

const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);

console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()));
console.log(new Intl.DateTimeFormat('es-US').format(new Date()));

const date = new Date();

// Obtém a diferença em minutos e horas.
console.log(date.getTimezoneOffset());
console.log(date.getTimezoneOffset() / 60);
