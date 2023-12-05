document.addEventListener('DOMContentLoaded', function() {

    function before() {
        loading = document.querySelector('.loading')
        loading.classList.remove('hidden')
    }

    pronto = document.querySelector('.pronto')

    pronto.addEventListener('click', function(event) {
        event.preventDefault();
        
        before()

        setTimeout(function() {
            window.location.href = "tela_principal.html";
        }, 1500);
    })

})