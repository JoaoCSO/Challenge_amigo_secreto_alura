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

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value;

    if (validarEntrada(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = ''; //Limpa o campo de entrada após adicionar o nome
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; //Limpa a lista antes de atualizá-la

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Erro: É necessário pelo menos dois amigos para realizar o sorteio')
        return;
    }
}


