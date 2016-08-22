var cadastroModal = document.getElementById('cadastroModal');
var btnCadastro = document.getElementById("btn-cadastro");
var cadastroSpan = document.getElementsByClassName("close-contato")[0];

btnCadastro.onclick = function() {
  cadastroModal.style.display = "block";
}

cadastroSpan.onclick = function() {
  cadastroModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == cadastroModal) {
      modal.style.display = "none";
  }
} 