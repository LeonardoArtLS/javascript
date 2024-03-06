function list(){

}

function insert(dados){
    let nomePessoa = dados.nome.value;
    let emailPessoa = dados.email.value;
    let telefonePessoa = dados.telefone.value;

    let pessoa = {
        nome: nomePessoa,
        email: emailPessoa,
        telefone: telefonePessoa
    }

    let base = localStorage.getItem("pessoas");
    let pessoas = [];
    pessoas.push(JSON.parse(base))
    pessoas.push(pessoa)

    //inserindo no localStorage
    if(localStorage.setItem("pessoas", JSON.stringify(pessoas))){
        return true;
    }else{
        return false;
    }
}

function update(){

}

function delet(){

}

//CONTROLE DE EVENTOS
const form = document.querySelector('form');
form.addEventListener('submit', function(){
    if(insert(form)){
        alert("Cadastro efetuado com sucesso.")
    }
})

console.log(localStorage);