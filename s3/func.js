const prompt = require ("prompt-sync")();

function saudacao (nomeMeu = "Visitante") {
    console.log (`Olá, ${nomeMeu}`);
}

let nomeMeu = prompt ("Digite seu nome: ");

saudacao (nomeMeu);
saudacao ("Maria");
saudacao ();

// multiplos

function criarPerfil (nome, sobrenome, cpf, cidade) {
    console.log ("Nome: " + nome);
    console.log ("Sobrenome: " + sobrenome);
    console.log ("CPF: " + cpf);
    console.log ("Cidade: " + cidade);
}

let nome = prompt ("Digite seu nome: ");
let sobrenome = prompt ("Digite seu sobrenome: ");
let cpf = prompt ("Digite seu CPF: ");
let cidade = prompt ("Digite sua cidade: ");

criarPerfil (nome, sobrenome, cpf, cidade);

