
for (let i=5; i>=1; i--) {
    console.log (i);
}
console.log ("Já");

let soma = 0;
let numero = 1;

while (numero <= 10) {
    soma += numero;
    numero ++;
}
console.log (`A soma é : ${soma}`);


//  terceiro
const prompt = require('prompt-sync')();

let numSecreto = 5;
let numDigitado;

do {
numDigitado = prompt ("Digite o númeor secreto (de 1 a 5): ");
numDigitado = Number(numDigitado);
    
while (Number.isNaN(numDigitado)) {
    numDigitado = prompt("Somente números. Digite o númeor secreto (de 1 a 5): ");
    numDigitado = Number(numDigitado); 
}

if (numDigitado != numSecreto) {
    console.log("Errou! Tente novamente.");
}

} while (numDigitado != numSecreto);

console.log ("Correto. Finalmente!");
