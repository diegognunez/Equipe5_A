document.addEventListener('DOMContentLoaded', function() {
    usuarioInput = document.getElementById('usuario');
    senhaInput = document.getElementById('senha');
    botaoPronto = document.getElementById('botaoPronto');
    loading = document.querySelector('.loading');

    function atualizarEstadoDoBotao() {
        if (usuarioInput.value && senhaInput.value) {
            botaoPronto.style.opacity = '1';
            botaoPronto.style.pointerEvents = 'auto';
        } else {
            botaoPronto.style.opacity = '0.5';
            botaoPronto.style.pointerEvents = 'none';
        }
    }

    usuarioInput.addEventListener('input', atualizarEstadoDoBotao);
    senhaInput.addEventListener('input', atualizarEstadoDoBotao);

    function before() {
        loading.classList.remove('hidden');
    }

    botaoPronto.addEventListener('click', function(event) {
        if (botaoPronto.style.opacity === '0.5') {
            event.preventDefault();
        } else {
            before();
            setTimeout(function() {
                window.location.href = "tela_principal.html";
            }, 1500);
        }
    });

    botaoPronto.style.opacity = '0.5';
    botaoPronto.style.pointerEvents = 'none';

    atualizarEstadoDoBotao();
});
