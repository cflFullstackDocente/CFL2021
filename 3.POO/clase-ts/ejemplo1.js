"use strict";
exports.__esModule = true;
function sumar(numeros) {
    var sum = 0;
    for (var i = 0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    return sum;
}
var arregloNumeros = [1, 2, 4, 1];
console.log(sumar(arregloNumeros));
