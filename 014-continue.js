let entrada = require('prompt-sync')();

let frase = entrada('Digite uma frase: ');
let frase2 = '';
let contador = -1;



while(contador < frase.length) {
    contador++;
    if (
        frase[contador] == 'a' ||
        frase[contador] == 'n'
        )   {
        continue;
    }
    frase2 = frase2 + frase.charAt(contador);
    
}

console.log(frase2);
