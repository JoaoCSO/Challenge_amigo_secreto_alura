// Array feito para armazenar os nomes dos amigos
let amigos = [];

function validarEntrada(nome) {
    const regex = /\d/; // Expressão regular para verificar se há números no nome

    if (nome.trim() === '') {
        alert('Por favor, insira um nome.');
        return false;
    } else if (regex.test(nome)) {
        alert('Números não são permitidos no nome.');
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
        input.value = ''; // Limpa o campo de entrada após adicionar o nome

        // Remove o resultado do sorteio anterior
        const resultadoAnterior = document.getElementById('resultadoSorteio');
        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Erro: É necessário pelo menos dois amigos para realizar o sorteio');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Limpa a lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Remove resultado anterior, se existir
    const resultadoAnterior = document.getElementById('resultadoSorteio');
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }

    // Cria e adiciona novo elemento com o resultado
    const resultado = document.createElement('p');
    resultado.id = 'resultadoSorteio';
    resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.classList.add('resultado-sorteio'); // Adiciona uma classe para estilização

    // Adiciona o resultado acima do botão de sorteio
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.parentNode.insertBefore(resultado, buttonContainer);

    // Reseta a lista de amigos após o sorteio
    resetarAmigos();
}

function resetarAmigos() {
    amigos = []; // Reseta a lista de amigos
    const input = document.getElementById('amigo');
    input.value = ''; // Limpa o campo de entrada
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista de amigos
}

// Adiciona um evento para a tecla Enter no campo de entrada
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Previne comportamento padrão ao pressionar Enter
        adicionarAmigo();
    }
});