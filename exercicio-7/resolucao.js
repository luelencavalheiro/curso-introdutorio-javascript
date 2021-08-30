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
 * Nas linhas abaixo, crie as variáveis `multiplicador` e `multiplicando` e atribua a elas
 * os valores 4 e 10, respectivamente.
 *
 * Em seguida, crie a variável `resultadoDaMultiplicacao` e atribua a ela a multiplicação 
 * das variáveis criadas acima
 */

  let multiplicador = 4;
  let multiplicando = 10;
  let resultadoDaMultiplicacao = multiplicador * multiplicando;


  // fim do seu código

  if(multiplicador === 4 && multiplicando === 10) {
    return resultadoDaMultiplicacao;
  }
  return null;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const result = returnMyExercise();
  
    if (result && result === 40) {
      ws.write('Você mandou bem!\n');
    }

    ws.end();
}
