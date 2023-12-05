document.addEventListener('DOMContentLoaded', function() {
  var botao_login = document.querySelector('.login');
  var botao_criarconta = document.querySelector('.criar_conta');

  botao_login.addEventListener('click', function() {
      this.style.backgroundColor = this.style.backgroundColor === '#45703e' ? '' : '#45703e';
  });

  botao_criarconta.addEventListener('click', function() {
      this.style.backgroundColor = this.style.backgroundColor === '#c40808' ? '' : '#c40808';
  });
});