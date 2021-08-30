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
function soma(elementoA, elementoB) {
//não altere a linha acima
    
/*
 * Atribua a soma da variável `elementoA` com a variável `elementoB`
 * na váriavel `resultadoSoma` (já criada abaixo)
 */
  
  var resultadoSoma = elementoA + elementoB;

//não altere as linhas abaixo
  return resultadoSoma;
}
// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
    const inputs = readLine().split(' ');

    const result = soma(parseInt(inputs[0]), parseInt(inputs[1]));
  
    ws.write(result + '\n');
  
    ws.end();
}
