let entrada = require('prompt-sync')();

/*
    Crie um programa que receba dois números e devolva
    como resultado a soma, subtração, multiplicação 
    e a divisão do primeiro pelo segundo número.
*/
console.log(' ')
let n1 = entrada('Digite o 1º número: ');
console.log(' ')
let n2 = entrada('Digite o 2º número: ');
console.log(' ')
console.log(' ')
console.log(' ')

let soma = parseInt(n1) + parseInt(n2);
let subtracao = parseInt(n1) - parseInt(n2);
let multiplicacao = parseInt(n1) * parseInt(n2);
let divisao = parseInt(n1) / parseInt(n2);
let resto = parseInt(n1) % parseInt(n2);

// let soma = parseFloat(n1) + parseFloat(n2);
// let subtracao = parseFloat(n1) - parseFloat(n2);
// let multiplicacao = parseFloat(n1) * parseFloat(n2);
// let divisao = parseFloat(n1) / parseFloat(n2);
// let resto = parseFloat(n1) % parseFloat(n2);


console.log(`Resultado da Soma = ${soma}`);
console.log(' ')
console.log(`Resultado da Subtração = ${subtracao}`);
console.log(' ')
console.log(`Resultado da Multiplicação = ${multiplicacao}`);
console.log(' ')
console.log(`Resultado da Divisão = ${divisao.toFixed(2)}`);
console.log(`Inteiro da Divisão = ${divisao.toFixed(2)}`);
//console.log(`Resto da Divisão = ${divisao.toFixed(2)}`);

entrada('Pressione "ENTER" para encerrar o programa!');

console.log('Programa encerrado com sucesso!!');