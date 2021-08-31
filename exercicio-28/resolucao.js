'use strict';

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


function imprimirLista(lista) {
// não altere a linha acima
    
/*
 * Nas linhas a seguir, escreva um código que imprima usando 
 * console.log() todos os elementos do array `lista`
 */
    
    for (let indice = 0; indice < lista.length; indice ++){
        console.log(lista[indice]);
    }
    

// não altere a linha abaixo
}
// fim do seu código

function main() {
    const listaCount = parseInt(readLine().trim(), 10);

    let lista = [];

    for (let i = 0; i < listaCount; i++) {
        const listaItem = readLine();
        lista.push(listaItem);
    }

    imprimirLista(lista);
}
