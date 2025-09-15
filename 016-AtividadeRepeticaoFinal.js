/*

    Crie um programa que peça ao usuário um valor
    inicial e um valor final para gerar tabuadas
    de um valor inicial até o final.

*/ 

let entrada = require('prompt-sync')();
let erros = [];

let tabuadaInicial = entrada('Digite a primeira tabuada que quer ver: ');
console.log(' ');
let tabuadaFinal = entrada ('Agora, digite a última tabuada que quer ver: ');


let contadorGeral = tabuadaInicial;



// Erros Possíveis
  if (tabuadaInicial === '' || tabuadaFinal === '') {
    erros.push('É necessário preencher todas as informações solicitadas!')
 } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal)) {
    erros.push('As duas entradas não são números!')  
 } else {
    
    if (isNaN(tabuadaInicial)) {
    console.log('O primeiro valor deve ser um número.');

 }


  if (isNaN(tabuadaFinal)) {
    console.log('O segundo valor deve ser um número');

 }
 }
// ------------------



 // Lógica do Programa

 if (erros.length > 0) {
    console.log('\n Erros encontrados no programa: ');
    erros.forEach(erro => console.log('- ' + erro));

 } else while(contadorGeral <= tabuadaFinal) {
         console.log(`TABUADA DO ${tabuadaInicial}`);
         console.log('');

         for (let cont = 1; cont <=10; cont++ ) {
            console.log(`${tabuadaInicial} x ${cont} = ${parseInt(tabuadaInicial * cont)}`);
         }

         tabuadaInicial++;
         contadorGeral++;
         console.log('');
 }