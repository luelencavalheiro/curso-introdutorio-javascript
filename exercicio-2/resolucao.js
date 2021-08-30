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

function retornaMinhaIdade() {

/*
 * Na linha 33, crie a variável `minhaIdade` e atribua
 * sua idade a ela
 */

 let minhaIdade = 25;

  //fim do seu código
  return minhaIdade;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const result = retornaMinhaIdade();
    const regex = new RegExp(/^\d+$/);
  
    if (result && typeof(result) === "number" && regex.test(result)) {
      ws.write('Você mandou bem!\n');
    }

    ws.end();
}
