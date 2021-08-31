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
// start main function
/*
 * Nas linhas abaixo, escreva uma função chamada `calculaIMC``
 * que receba dois parametros: `altura` e `peso`
 * e retorne o resultado do calculo de IMC
 */

 function calculaIMC (altura, peso) {
     let calculo;
     calculo = peso/(altura*altura);
     return calculo;
 }


// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
    const inputs = readLine().split(' ');

    const result = calculaIMC(parseFloat(inputs[0]), parseFloat(inputs[1]));
  
    ws.write(result + '\n');
  
    ws.end();
}