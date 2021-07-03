// function a(v){
//     let r = [];
//     let b=0;
//     for(let i=0; i<v.length; i++){
//         console.log("valor de v: ", v, " valor de r: ", r, " valor b: ", b, " valor i: ", i);
//         console.log("v en posicion i: " + v[i] + " v en i MOD 2: " + v[i]%2);
//         if(v[i] % 2==0){
//             console.log("entra en el if");
//             r[b] = v[i];
//             b++;
//         }
//     }
//     console.log("valor de r al final de la funcion: " + r);
//     return r;
// }

// let arreglo= [1,2,3,4,5];
// console.log(a(arreglo));

let numeros = new Array(10);

let numeroAlAzar = (tope) => {
    return Math.floor(Math.random()*tope);
};

for(let i=0; i<10; i++){
    numeros[i]=numeroAlAzar(100);
    console.log(numeros[i]);
};