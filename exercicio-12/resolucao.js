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
function moduloPorDois(elementoA) {
// não altere a linha acima

/*
 * Complete o código deste exercício, atribuindo na 
 * variável `resultado`, o resto da divisão da variável 
 * `elementoA` por 2.
 */
  
    
  var resultado = elementoA % 2;

    
// não altere as linhas abaixo
  return resultado;
}
// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
    const inputs = readLine().split(' ');

    const result = moduloPorDois(parseInt(inputs[0]));
  
    ws.write(result + '\n');
  
    ws.end();
}
