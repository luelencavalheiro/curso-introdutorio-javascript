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



function converteStringParaArray(frase) {
// não altere a linha acima

 /*
 * Complete o código abaixo atribuindo na variável resultado
 * o valor de acordo com as regras do exercício
 */

    let resultado = [] 
    for ( let indicador = 0; indicador < frase.length; indicador++){
        resultado[indicador] = frase[indicador];
        console.log(resultado[indicador] + ",");
    }
// escreva aqui seu código:

    
    
    
// não altere as linhas abaixo
  return resultado;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const frase = readLine();

    const result = converteStringParaArray(frase);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
