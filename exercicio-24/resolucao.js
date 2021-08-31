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



function retornaPrimeiroElemento(lista) {
// não altere a linha acima
   
/*
 * Complete o código atribuindo na variável `resultado`
 * o primeiro elemento do array `lista` se o array não estiver vazio,
 * ou a string "array vazio" se o array `lista` estiver vazio.
 */
 
 let resultado; 
 
 console.log
 if (lista.length === 0){
     resultado = "array vazio"
 }
 else {
     resultado = lista[0];
 }

// não altere as linhas abaixo
  return resultado;
}

// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const listaCount = parseInt(readLine().trim(), 10);

    let lista = [];

    for (let i = 0; i < listaCount; i++) {
        const listaItem = readLine();
        lista.push(listaItem);
    }

    const result = retornaPrimeiroElemento(lista);

    ws.write(result + '\n');

    ws.end();
}
