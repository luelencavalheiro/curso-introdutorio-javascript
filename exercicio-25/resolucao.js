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


function comparaStrings(primeiraString, segundaString) {
// não altere a linha acima

/*
 * Complete o código abaixo atribuindo na variável resultado
 * a concatenação das strings `primeiraString` e 
 * `segundaString` de acordo com as regras do exercício
 */

 let resultado; 
 
 if(primeiraString.length > segundaString.length){
     resultado = segundaString + primeiraString;
 }
 else if (segundaString.length > primeiraString.length){
     resultado = primeiraString + segundaString;
 }
 
 else {
     resultado =resultado = segundaString + primeiraString;
 }
// não altere as linhas abaixo
  return resultado;
}
// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const primeiraString = readLine();

    const segundaString = readLine();

    const result = comparaStrings(primeiraString, segundaString);

    ws.write(result + '\n');

    ws.end();
}
