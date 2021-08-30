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
function exponencial(base, expoente) {
//não altere a linha acima
    
/*
 * Na linha 36, declare uma variável chamada `potencia`
 * e atribua a ela o valor da variável `base` elevada a variável
 * `expoente`
 */
  
  let potencia = base ** expoente;
    

//não altere as linhas abaixo
  return potencia;
}
// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
    const inputs = readLine().split(' ');

    const result = exponencial(parseInt(inputs[0]), parseInt(inputs[1]));
  
    ws.write(result + '\n');
  
    ws.end();
}
