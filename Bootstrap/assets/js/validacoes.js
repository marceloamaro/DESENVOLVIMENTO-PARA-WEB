function validarCadastro(){
   let nome = document.getElementById('nome').value;
   let email = document.getElementById('email').value;
   let senha = document.getElementById('senha').value;
   let estado = document.getElementById('estado').value;

   if(nome ==""){
       document.getElementById('erro').innerHTML = "<strong>OPS! Informe seu nome.</strong>";
       document.getElementById('erro').removeAttribute('hidden');
       document.getElementById('nome').focus();
   }else if(email == ""){
    document.getElementById('erro').innerHTML = "<strong>OPS! Informe seu email.</strong>";
    document.getElementById('erro').removeAttribute('hidden');
    document.getElementById('email').focus();
   }else if(senha == ""){
    document.getElementById('erro').innerHTML = "<strong>OPS! Informe seu senha.</strong>";
    document.getElementById('erro').removeAttribute('hidden');
    document.getElementById('senha').focus();
   }
}
function selEstado(){
    let estado = document.getElementById('cidade').value;
    if(estado !=){
        document.getElementById('cidade').removeAttribute('disabled');
        return tru
    }
}