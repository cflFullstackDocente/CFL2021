let readlineSync=require('readline-sync');
let numMax=0;
let numMin=Number.MAX_VALUE;
let numeroIngresado=readlineSync.questionInt("Ingrese un numero, 0 para terminar ");
let sumar=0;
let contador=0;


while (numeroIngresado !=0) {
    console.log("numingresado=", numeroIngresado);
    if(numeroIngresado>0){
        console.log("es positivo", numeroIngresado);
        positivos = positivos+1;
    }

    if (numeroIngresado > numMax) {
        numMax=numeroIngresado;
    }
    if (numeroIngresado < numMin) {
    numMin=numeroIngresado;
    }
    sumar= sumar + numeroIngresado;
    contador++;
    numeroIngresado=readlineSync.questionInt("Ingrese un numero, 0 para terminar ");
}
console.log("El numero maximo es: ", numMax);
console.log("El numero minimo es: ", numMin);
console.log("La media es: ", sumar/contador);