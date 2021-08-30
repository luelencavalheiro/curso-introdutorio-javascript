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
 * Declare e atribua o valor de cada váriável a partir da linha 34.
 * Variáveis: meuTamanho, corDaMinhaCamisa, queroEstudarNaTrybe, computadorLigado
 * e a constante PI
 */

  let meuTamanho = 166;
  let corDaMinhaCamisa = "azul";
  let queroEstudarNaTrybe = true; 
  let computadorLigado = false;
  const PI = 3.14159265359;

  // fim do seu código

  let resultObject = {
    integer: meuTamanho,
    float: PI,
    shirt: corDaMinhaCamisa,
    trueBoolean: queroEstudarNaTrybe,
    falseBoolean: computadorLigado
  }

  return resultObject;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const result = returnMyExercise();
  
    if (result && typeof(result.integer) === "number" && typeof(result.float) === "number" && result.trueBoolean === true && result.falseBoolean === false && typeof(result.shirt) === "string") {
      ws.write('Você mandou bem!\n');
    }

    ws.end();
}
