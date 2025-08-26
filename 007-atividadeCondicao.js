/*
    Crie um programa de um estabelecimento que receba dados como
    o nome, a idade e se a pessoa é amigo do dono.
    Retorne uma mensagem de acordo com as validações abaixo:

    - Se a pessoa ter mais de 18 anos, o acesso ao local será liberado.
    - Pessoas com menos de 18 não acessam o local.
    - Amigos do Dono podem acessar o local independente da idade.
    - Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhará 
    uma bebida
*/ 

let entrada = require('prompt-sync')();

console.log(' ')
let nome = entrada('Nos fale o seu nome: ');
console.log(' ')
let idade = entrada('Agora, nos fale sua idade: ')
console.log(' ')
let amigo = entrada('Por último, nos diga se é amigo do dono: ')
console.log(' ') 

 if (nome === ' ' || idade === ' ' || amigo === ' ') {
    console.log('É necessário preencher todas as informações solicitadas!')
 } else if (isNaN(idade)) {
    console.log('A idade deve ser um número.');

 }

if(amigo === "sim") {
    if (idade >=18 ){
        console.log(`Parabéns, ${nome}, sua entrada tá permitida e ainda ganhou uma bebida daora!`)
    } else {
         console.log(`Então, ${nome}, cê pode entrar, mas, só porque é amigo do dono`)
    }
}

if(amigo === "não") {
    if (idade >=18 ){
        console.log(`Olá, ${nome}, você pode entrar.`)
    } else {
         console.log(`Você NÃO pode entrar, ${nome}. Não sobrou nada pro beta :( `)
    }
}