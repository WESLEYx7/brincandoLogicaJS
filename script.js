const quantidadePizza = document.querySelector('#quantidade-pizza');
const btnAdd = document.querySelector('#btn-add');
const btnFinalizar = document.getElementById('btn-finalizar')
const valorTotal = document.getElementById('valor-total')
const btnLimpar = document.getElementById('btn-limpar')


let pizza = 0; // Variável pizza
let valorPizza = 59.9

//Funções do Programa kkkk


function adicionar() {
    pizza++;
    quantidadePizza.innerHTML = `Quantidade de pizza: ${pizza}`
}

function finalizar() {
    let valor = valorPizza * pizza
    valorTotal.innerHTML = `O valor total foi de: R$:${valor}`
}

function limpar() {
    pizza = 0;
    valorTotal.innerHTML = `O valor total foi de: R$0.00`;
    quantidadePizza.innerHTML = `Quantidade de pizza: 0`;
}

function atualizar(precoPizza) {
    precoPizza = novoPreco
}

btnAdd.addEventListener('click', adicionar);
btnFinalizar.addEventListener('click', finalizar)
btnLimpar.addEventListener('click', limpar)