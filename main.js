// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        resultCep.innerText = body;
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const resultBtc = document.querySelector('.btc');

function valueBtc() {

    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        resultBtc.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ', ')
    })
}

valueBtc();


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnNext = document.querySelector('.next');
const textPiada = document.querySelector('.piada')

function getPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        textPiada.innerText = piada.value;
    })
}

btnNext.addEventListener('click', getPiada);