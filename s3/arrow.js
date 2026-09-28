const prompt = require ("prompt-sync")();

function calculaMedia1 (nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

let recebeNota1 = Number (prompt ("Digite a nota 1: "));
let recebeNota2 = Number (prompt ("Digite a nota 2: "));

console.log (`Média = ${calculaMedia1 (recebeNota1, recebeNota2)}`);



const calculaMedia2 = (nota1, nota2) => (nota1 + nota2) / 2;

console.log (`Média = ${calculaMedia2 (recebeNota1, recebeNota2)}`);