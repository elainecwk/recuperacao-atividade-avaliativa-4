import leia from "readline-sync";

var lista = []
var count = 0
var consoantes = 0

while(count != 11){
    let caractere = leia.questionInt("digite uma texto: ")
    lista.push(caractere)
    count++
   }

   for(let i = 0; i < lista.length; i++){
    if(lista[i] == "a" || 
    lista[i] == "e" || 
    lista[i] == "i" || 
    lista[i] == "o" || 
    lista[i] == "u") {
    console.log()
    }else {
   console.log(lista[i])
   consoantes += 1
    }
   }

   console.log(`tem ${consoantes} consoantes digitadas`)
