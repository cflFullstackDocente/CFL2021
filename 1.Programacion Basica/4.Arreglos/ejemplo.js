// let meses=["enero"];
// let longitud=3;

// cargarArreglo(meses,longitud);

// function mostrarArreglo(meses){
//     for(let indice=0; indice<meses.length;indice++){
//         console.log(meses[indice]);
//     }
// }

// let readlineSync=require("readline-sync");

// let vector1= new Array(6);
// let indice, suma, numeros;
// for(indice=0; indice <5; indice++){
//     numeros = readlineSync.questionInt("ingrese numeros"+indice);
//     vector1[indice]=numeros;
// }

let max = 10
let min = 3
let random=Math.random();
console.log(random);
let mult = random * (max-min+1)
console.log(mult)
console.log(Math.floor(  mult + min))