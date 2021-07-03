let readlineSync = require('readline-sync');
let variable1;


let determinarAula = (array) => {
    let variable2;
    let variable3=-1;
    if(variable2==0){
        variable3=0;
    }
    console.log(variable3);
    console.log(variable2);
    switch (true) {
        case array.length <= 30:
            return 'Sala Asignada: AMARILLA';
            break;
        case array.length <= 35:
            return 'Sala Asignada: VERDE';
            break;
        case array.length <= 40:
            return 'Sala Asignada: AZUL';
            break;
        default: 
            return 'No hay Sala para su Grupo de Alumnos';  
    }
  
};

console.log(variable2);
let alumnos = readlineSync.questionInt('Cantidad de alumnos: ');

let curso = new Array(alumnos);

console.log(determinarAula(curso));
