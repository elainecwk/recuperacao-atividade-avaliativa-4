import leia from "readline-sync";



var numeros = [];
var numero;


do {
    numero = leia.questionInt("DIGITE UM NUMERO:");
    if (numero !== 0) {
        numeros.push(numero);
    }
} while (numero !== 0);



}



