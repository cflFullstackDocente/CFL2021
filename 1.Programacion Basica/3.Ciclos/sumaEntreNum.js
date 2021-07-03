let readlineSync = require("readline-sync");

let numero1 = readlineSync.questionInt("ingrese Numero Desde: "); //2
let numero2 = readlineSync.questionInt("ingrese Numero Hasta: "); //7
let suma =0;

if(numero1>numero2){
    let aux=numero1;
    numero1=numero2;
    numero2=aux;
}

//OPCION FOR

// for(numero1;numero1<=numero2;numero1++){
//     suma = suma + numero1;
// }

//OPCION WHILE

// while(numero1<=numero2){
//     suma = suma + numero1;
//     numero1++;
// }

console.log("el resultado de la suma es ",suma);