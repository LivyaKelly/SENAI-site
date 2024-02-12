//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    
    );
}
//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "admin" && senha == "1234"){
        logado = 1;
        window.location.href = "index.html";
    }
    else{
        alert("Acesso Negado! Usuário ou Senha Incorretos!");
    }
}

//Ativar alert no botão cadastrar
function cadastro(){
    alert("Cadastro Realizado com Sucesso!");
    window.location.href = "index.html";
}