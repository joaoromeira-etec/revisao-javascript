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
const senhaCorreta = 'penislargo';
let tentativas = 0;
let senhaDigitada;
let acesso = false;

do {
    senhaDigitada = entrada('Digite a senha para acessar o sistema de Login: ');

    if (senhaDigitada === senhaCorreta) {
        acesso = true;
        console.log('Bem vindo ao sistema de login!');
    } else {
        tentativas++;
        if (tentativas < 3) {
            console.log(' ');
            console.log(`Senha incorreta. Tentativa ${tentativas} de 3.`);
            console.log(' ');
        }
    }

} while (!acesso && tentativas < 3);

if (!acesso) {
    console.log('Usuário bloqueado. Número máximo de tentativas excedido.');
}

