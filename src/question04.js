import leia from "readline-sync;";

var char = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'];

var senha = '';
    
    for (var i = 0; i < comprimento; i++) {
        var indiceAleatorio = parseInt(Math.random() * char.length);
        senha += char[indiceAleatorio];
    }
    
    return senha;



 function solicitarComprimento() {
    var comprimento = parseInt(prompt("DIGITE UMA SENHA:"), 10);
    
    if ((comprimento) || comprimento <= 0) {
        alert("Comprimento inválido. Por favor, insira um número positivo.");
        return solicitarComprimento();
    }
    
    return comprimento;
}


var comprimentoSenha = solicitarComprimento();
var senhaGerada = gerarSenha(comprimentoSenha);

console.log(`Senha gerada: ${senhaGerada}`);
