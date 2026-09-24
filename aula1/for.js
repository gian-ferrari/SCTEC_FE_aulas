for (let i=0; i<=10; i++) {
    console.log (`3 x ${i} = ${3*i};`);
}

const prompt = require('prompt-sync')();

let idade = prompt ("Digite sua idade: ");
idade = Number(idade);
while (Number.isNaN(idade)) {
    idade = prompt("Digite sua idade. Somente números: ");
    idade = Number(idade);
}

console.log ("Finalmente!");