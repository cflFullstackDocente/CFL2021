let readlineSync = require("readline-sync");

let numeroIngresado = readlineSync.questionInt("ingrese numero: ");

while(numeroIngresado <= 0){
    numeroIngresado = readlineSync.questionInt("ingrese numero: ");
}

if(numeroIngresado % 2 == 0){
    console.log("numero par");
}else{
    console.log("numero impar");
}