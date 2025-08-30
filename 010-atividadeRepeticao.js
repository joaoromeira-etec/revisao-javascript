/* 
    Crie um programa que receba dois número e apresente a contagem de primeiro número até o segundo. Caso o segundo número seja maior a contagem deve ser decrescente. 
    Trate também de possíveis erros de valores digitados! 
*/
let entrada = require('prompt-sync')();
let erros = [];


console.log(' ')
let nUm = entrada('Digite o primeiro número: ');
let nDois = entrada('Digite o segundo número: ');
console.log(' ')
let contagem = 0;

let n1 = parseInt(nUm);
let n2 = parseInt(nDois);



 // Erros
 if (isNaN(n1)) {
    console.log(' - O primeiro valor deve ser um número.');

 }

 if (nUm.trim() === '' || nDois.trim() === '') {
    console.log(' - É necessário preencher todas as informações solicitadas!')
 }

  if (isNaN(n2)) {
    console.log(' - O segundo valor deve ser um número');

 }




 // Erros de Validação!
 if (erros.length > 0) {
    console.log('Erros encontrados no programa: ');
    erros.forEach(erro => console.log('- ' + erro))
 } else {
    console.log('Contagem: ')
 }


