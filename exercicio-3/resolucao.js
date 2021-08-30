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

function retornaMinhaNaturalidade() {
/*
 * Na linha 32, crie a constante NATURALIDADE e atribua
 * o nome do país em que você nasceu a ela
 */


  const NATURALIDADE = "Brasil";


  // fim do seu código
  return NATURALIDADE;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const result = retornaMinhaNaturalidade();
    const regex = new RegExp(/\b[^\d\W]+\b/g);
  
    if (result && typeof(result) === "string" && regex.test(result)) {
      ws.write('Você mandou bem!\n');
    }

    ws.end();
}
