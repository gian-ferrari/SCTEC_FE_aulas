
const prompt = require ('prompt-sync')();

function verificarPalpite (palpite, alvo) {
    if (palpite === alvo) {
        return "Acertou!";
    } else if (palpite > alvo) {
        return "É menor";
    }
    return "É maior";
}

let aleatorio = Math.floor (Math.random()*10);
//console.log (aleatorio);
let palpite;
let cont = 0;

do {
    palpite = Number(prompt("Digite um número de 0 a 9: "));
    console.log (verificarPalpite (palpite, aleatorio));
    cont ++;
} while (palpite !== aleatorio);

console.log (`Você acertou em ${cont} tentativas.`);