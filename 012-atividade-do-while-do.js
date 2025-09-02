/*
    Continuando a implementração do exemplo 11,
    faça com que o programa aceite uma senha
    errada três vezes, após a terceira tentativa
    errada o sistema deve apresentar a mensagem
    informando que o usuário está bloqueado.
    Quando a senha for digitada corretamente, a mensagem
    "Bem vindo ao sistema de login" deve ser apresentada.
*/

let entrada = require('prompt-sync')();
let tentativas = 0;

const senha = 'penislargo';
let acesso = false;

let senhaDigitada;

do {
    

    if (senhaDigitada === senha) {
        acesso = true;
        console.log('Senha confirmada, Bem-Vindo ao sistema de login!');
        break;
    };


senhaDigitada = entrada('Digite a senha para acessar o sistema de Login: ');
    tentativas++;
} while ( tentativas <= 3);



