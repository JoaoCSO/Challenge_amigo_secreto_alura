//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Array feito para armazenar os nomes dos amigos
let amigos = [];

function validarEntrada(nome) {
    if (nome.trim() === '') {
        alert('Por favor, insira um nome.');
        return false;
    } else {
        return true;
    }
}

