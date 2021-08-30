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

function returnMyExercise() {
  // start main function
/*
 * Nas linhas abaixo, crie as variáveis `dividendo` e `divisor` e atribua a elas
 * os valores 100 e 4, respectivamente.
 *
 * Em seguida, crie a variável `resultadoDaDivisao` e atribua a ela a divisão 
 * da variável dividendo pela variável divisor
 */

  let dividendo = 100;
  let divisor = 4;
  let resultadoDaDivisao = dividendo / divisor; 

  // fim do seu código

  if(dividendo === 100 && divisor === 4) {
    return resultadoDaDivisao;
  }
  return null;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const result = returnMyExercise();
  
    if (result && result === 25) {
      ws.write('Você mandou bem!\n');
    }

    ws.end();
}
