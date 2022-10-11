function inserir(){
    var nome= document.getElementById('nome').value;
    var email= document.getElementById('email').value;
    var sexo= document.getElementById('sexo').value;

    if(nome==""|| email==""){
        alert('Preencha todos os dados para salvar!');
    }else{
        var sexoDescricao;
        if(sexo== "M"){
            sexoDescricao = "Masculino";
        }else{
            sexoDescricao = "Feminino";
        }

        var tabela= document.getElementById('tbl-cadastro');
        var numLinhas= tabela.rows.length;
        var linha = tabela.insertRow(numLinhas);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        celula1.innerHTML = nome;
        celula2.innerHTML = email;
        celula3.innerHTML = sexoDescricao ;
        document.getElementById('nome').value ="";
        document.getElementById('email').value ="";
        
    }

}