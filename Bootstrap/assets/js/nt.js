function inserir(){
    var nome= document.getElementById('nome').value;
    var disciplina= document.getElementById('disciplina').value;
    var nota= document.getElementById('nota').value;
    var status= document.getElementById('status').value;

    if(nome==""|| disciplina==""|| nota==""){
        alert('Preencha todos os dados para salvar!');
    }else{
        var stDescricao;
        if(status== "APR"){
            stDescricao = "Aprovado";
        }else{
            stDescricao = "Reprovado";
        }

        var tabela= document.getElementById('tbl-cadastro');
        var numLinhas= tabela.rows.length;
        var linha = tabela.insertRow(numLinhas);
        var celula0 = linha.insertCell(0);
        var celula1 = linha.insertCell(1);
        var celula2 = linha.insertCell(2);
        var celula3 = linha.insertCell(3);
        celula0.innerHTML = nome;
        celula1.innerHTML = disciplina;
        celula2.innerHTML = nota;
        celula3.innerHTML = stDescricao ;
        document.getElementById('nome').value ="";
        document.getElementById('disciplina').value ="";
        document.getElementById('nota').value ="";
        
    }

}