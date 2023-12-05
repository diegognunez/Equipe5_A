document.addEventListener('DOMContentLoaded', function () {
    var usuarioInput = document.getElementById('usuario');
    var senhaInput = document.getElementById('senha');
    var botaoPronto = document.getElementById('botaoPronto');

    // Função para verificar o estado dos campos de entrada e ajustar a aparência do botão
    function atualizarEstadoDoBotao() {
        if (usuarioInput.value || senhaInput.value) {
            // Botão "aceso"
            botaoPronto.style.opacity = '1';
            botaoPronto.style.pointerEvents = 'auto';
        } else {
            // Botão "apagado"
            botaoPronto.style.opacity = '0.5';
            botaoPronto.style.pointerEvents = 'none';
        }
    }

    // Adiciona os ouvintes de evento nos campos de entrada
    usuarioInput.addEventListener('input', atualizarEstadoDoBotao);
    senhaInput.addEventListener('input', atualizarEstadoDoBotao);

    // Adiciona um ouvinte de evento no botão "Pronto" para impedir a ação padrão se o botão estiver inativo
    botaoPronto.addEventListener('click', function (e) {
        if (botaoPronto.style.opacity === '0.5') {
            e.preventDefault();
        }
    });

    // Define a aparência inicial do botão "Pronto" como "apagado"
    botaoPronto.style.opacity = '0.5';
    botaoPronto.style.pointerEvents = 'none';

    // Inicializa o estado do botão com base nos valores atuais dos campos de entrada
    atualizarEstadoDoBotao();
});