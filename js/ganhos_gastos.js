function exibirAviso(mensagem, corDeFundo) {
    const avisoDiv = document.getElementById('aviso');
    avisoDiv.textContent = mensagem;
    avisoDiv.className = 'aviso';
    avisoDiv.classList.add(corDeFundo);
    avisoDiv.style.display = 'block';

    setTimeout(function() {
        avisoDiv.style.display = 'none';
    }, 3000);
}

function validarValor(valor) {
    if (valor < 0 || isNaN(valor)) {
        return false;
    }
    return true;
}

document.getElementById('valor').addEventListener('blur', function() {
    const valor = parseFloat(this.value);
    if (!validarValor(valor)) {
        exibirAviso('Valor deve ser no mínimo = 0 reais', 'vermelho');
    }
});

document.querySelector('.Ganhos').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (!validarValor(valor)) {
        exibirAviso('Arrume a informação do valor', 'vermelho');
    } else {
        exibirAviso('Ganho adicionado', 'verde');
    }
});

document.querySelector('.Gastos').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (!validarValor(valor)) {
        exibirAviso('Arrume a informação do valor', 'vermelho');
    } else {
        exibirAviso('Gasto adicionado', 'verde');
    }
});
