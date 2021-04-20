//Ejercicio original para el repaso - Aumento de sueldo
let readlineSync = require("readline-sync");

let salario = readlineSync.questionInt("Ingrese su salario: ");
let aumento20 = (salario*20)/100;
let aumento10 = (salario*10)/100; // cambiar cuenta
let aumento5 = (salario*5)/100;
let salarioAumento20= salario + aumento20;
let salarioAumento10= salario + aumento10;
let salarioAumento5= salario + aumento5;

if (salario <= 15000){
console.log(`Tiene aumento del 20%, va a cobrar: ${salarioAumento20}`);
}else{if(salario > 15000 && salario <=20000){
console.log(`Tiene aumento de 10%, va a cobrar: ${salarioAumento10}`);
}else{
if(salario > 20000 && salario <= 25000){console.log(`Tiene aumento de 5%, va a cobrar ${salarioAumento5}`);
}else{
    if(salario > 25000){
    console.log(`No tiene aumento`); 
}
}
}
}