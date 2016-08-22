var modal = document.getElementById('myModal');
var btnContratarEmpresa = document.getElementById("btn-contratar-empresa");
var btnLogin = document.getElementById("btn-login");
var btnLoginFooter = document.getElementById("btn-login-footer");
var span = document.getElementsByClassName("close")[0];

btnContratarEmpresa.onclick = function() {
  modal.style.display = "block";
}

btnLogin.onclick = function() {
  modal.style.display = "block";
}

btnLoginFooter.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
