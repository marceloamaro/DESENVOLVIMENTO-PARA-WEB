function validarCadastro(){
   let nome = document.getElementById('nome').value;
   let email = document.getElementById('email').value;
   let senha = document.getElementById('senha').value;
   let estEstado = estEstado;

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
   }else if(estEstado == true){
    document.getElementById('erro').innerHTML = "<strong>OPS! Pode enviar.</strong>";
    
    
   }
}
function selEstado(){
    let estado = document.getElementById('cidade').value;
    if(estado !=""){
        document.getElementById('cidade').removeAttribute('disabled');
        return true;
    }else{
        document.getElementById('erro').innerHTML = "<strong>OPS! Informe seu senha.</strong>";
        document.getElementById('erro').removeAttribute('hidden');
        document.getElementById('cidade').setAttribute('disabled', true);
    }
}