function validarCadastro(){
   let nome = document.getElementById('nome').value;
   let email = document.getElementById('email').value;
   let senha = document.getElementById('senha').value;
   let estado = document.getElementById('estado').value;

   if(nome ==""){
       document.getElementById('erro').innerHTML = "<strong>OPS! Informe seu nome.</strong>";
       document.getElementById('erro').removeAttribute('hidden');
       document.getElementById('nome').focus();
   }
}