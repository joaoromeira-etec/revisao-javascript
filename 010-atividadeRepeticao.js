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
let contagens = 0;

let n1 = parseInt(nUm);
let n2 = parseInt(nDois);



 // Erros de Validação
  if (nUm === '' || nDois === '') {
    console.log(' - É necessário preencher todas as informações solicitadas!')
 } else if (isNaN(nUm) || isNaN(nDois)) {
    console.log(' - As duas entradas não são números!')  
 }



 if (isNaN(n1)) {
    console.log(' - O primeiro valor deve ser um número.');

 }


  if (isNaN(n2)) {
    console.log(' - O segundo valor deve ser um número');

 }




 // Lógica do Programa
 if (erros.length > 0) {
    console.log('Erros encontrados no programa: ');
    erros.forEach(erro => console.log('- ' + erro))
 } else if (n1 < n2) {

    console.log('Contagem: ')
    while (n1 <= n2) {
      console.log(n1);
      n1++;
      contagens
    }

 } else if (n1 > n2) {

   while (n1 >= n2) {
      console.log(n1);
      n1--;
      contagens++;
   }
 } else { 
   
   console.log(n1) 
   repeticoes = 1;
 }

 console.log('')
 console.log('Pressione Enter para encerrar o programa!')


