'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete a função 'retornaNomeCompleto' abaixo.
 *
 * É esperado que a função retorne uma STRING
 */

function retornaNomeCompleto() {
  
/*
 * Declare na linha 37 a variável `nomeCompleto` e atribua a ela o seu nome completo
 */
  
  let nomeCompleto = "Luelen Cavalheiro";
  
  // fim do seu código
  
  // a linha 40 retorna a variável `nomeCompleto`
  return nomeCompleto;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const result = retornaNomeCompleto();
    const regex = new RegExp(/\b[^\d\W]+\b/g);
  
    if (result && result.length > 0 && regex.test(result)) {
      ws.write('Você mandou bem!\n');
    }
  
    console.log(result);

    ws.end();
}
