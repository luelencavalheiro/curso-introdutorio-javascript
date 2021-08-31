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

function determinarGeracao(anoDeNascimento) {
// não altere a linha acima
    
/* 
 * Atribua um dos seguintes valores na variável `resultado`
 *
 * Geração silenciosa: para os nascidos até o ano de 1945;
 * Boomers: para os que nasceram depois de 1945 até 1964;
 * Geração X: para os que nasceram depois de 1964 até 1980;
 * Millennials: para os que nasceram depois de 1980 até 1996;
 * Geração Z: para os que nasceram depois de 1996;
 */

  var resultado;
  
  if (anoDeNascimento <= 1945) {
    resultado = "Geração silenciosa";
  }
  else if (anoDeNascimento > 1945 && anoDeNascimento <=1964){
    resultado = "Boomers";
  }
  else if (anoDeNascimento > 1964 && anoDeNascimento <=1980){
    resultado = "Geração X";
  }
  else if (anoDeNascimento > 1980 && anoDeNascimento <=1996){
    resultado = "Millennials";
  }
  else {
    resultado = "Geração Z";
  }
  

// não altere as linhas abaixo
  return resultado;
}

// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
    const inputs = readLine().split(' ');

    const result = determinarGeracao(parseInt(inputs[0]));
  
    ws.write(result + '\n');
  
    ws.end();
}
