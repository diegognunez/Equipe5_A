document.addEventListener('DOMContentLoaded', function() {
    botao_login = document.querySelector('.login');
    botao_criarconta = document.querySelector('.criar_conta');

    botao_login.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#45703e';
    });

    botao_login.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });

    botao_criarconta.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#c40808';
    });

    botao_criarconta.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });
});