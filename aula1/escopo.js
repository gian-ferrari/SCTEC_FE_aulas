
const prompt = require('prompt-sync')();

let idade = prompt("Digute sua idade: ");
console.log("Idade digitada: " + idade);

idade = Number(idade);
if (Number.isNaN(idade)) {
    idade = prompt("Erro. Somente números. Digite sua idade: ");
}

let mensagem;

if(idade >= 18){
    mensagem = "Adulto.";
} else{
    mensagem = "Menor de idade.";
}

console.log(mensagem);

