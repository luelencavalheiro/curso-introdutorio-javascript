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
 * Crie aqui uma função `somaDoisElementos`, que irá 
 * receber dois parâmetros, `elementoA` e `elementoB` 
 * e que retorne a soma desses dois números.
 */
 function somaDoisElementos(elementoA, elementoB){
     let resultado = elementoA + elementoB;
     return resultado;
 }

// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const elementoA = parseInt(readLine().trim(), 10);

    const elementoB = parseInt(readLine().trim(), 10);

    const result = somaDoisElementos(elementoA, elementoB);

    ws.write(result + '\n');

    ws.end();
}
