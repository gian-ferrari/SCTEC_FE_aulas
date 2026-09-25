const prompt = require ("prompt-sync")();

function calculaPreco (valorProduto, valorDesconto) {
    let valorFinal = valorProduto * (1 - valorDesconto/100);
    console.log (`O valor final do produto é: ${valorFinal}`);
}

console.log ("Desconto válido para compras acima de R$ 100,00");
let valorProduto = prompt ("Digite o valor do produto (ex: 249,9 para R$ 249,90): ");
let valorDesconto = prompt ("Digite o desconto percentual (ex: 10 para 10%): ");

valorProduto = Number (valorProduto);
valorDesconto = Number (valorDesconto);

if (valorProduto >= 100) {
    calculaPreco (valorProduto, valorDesconto);
} else {
    console.log ("Não há desconto para produtos com valor inferior a R$ 100,00");
}