import leia from "readline-sync";

var nomes = [];
var idades = [];

for (let i = 0; i < 5; i++){
    var nomes = leia.question(`Digite o nome ${i + 1}:`);
    var idades = leia.questionInt(`Digite a idade de ${nomes}:`, 10);

    nomes.push(nome);
    idades.push(idades);
}
 varmaisVelho = 0;
 varmaisNovo =0;

 for ( let i = 1; i < idades.length; i++){
    if (idades[i] > idades[varMaisVelho]) {
        varMaisVelho = i;
    }
    if (idades[i] < idades[ varmaisNovo ]) {
        varmaisNovo = i;
    }

}
console.log(`A pessoa mais velha é ${nomes[varmaisVelho ]} com ${idades[varmaisVelhoo]} anos.`);
console.log(`A pessoa mais nova é ${nomes[varmaisNovo ]} com ${idades[varmaisNovo]});

