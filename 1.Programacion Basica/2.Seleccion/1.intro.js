// let haceFrio = false;
// let estaLloviendo = false;


// if (haceFrio || estaLloviendo){
//     console.log("duermo la siesta");
// }else {
//     console.log("no hace frio");
// }

let readlineSync = require("readline-sync");
let edad = readlineSync.questionInt("Ingrese su edad");
let altura = readlineSync.questionInt("Ingrese su altura");

console.log(edad>18);
console.log(altura>170);
console.log(edad>18  && altura>170);

if(edad>18 && altura > 170){
    console.log("puede pasar");
}else{
    console.log("no puede pasar");
}

