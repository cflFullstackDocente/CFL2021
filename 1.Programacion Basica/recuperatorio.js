let camila = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let franco = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let sofia = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let matias = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let agustina = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];
let vendedores = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];

function calcularMin(ventas){
    let posicionVentaMinima = 0;
    for(let i=1; i < ventas.length; i++){
        if (ventas[i] < ventas[posicionVentaMinima]){
            posicionVentaMinima =i;
        }
    }
    return posicionVentaMinima;
}

function calcularMax(ventas){
    let posicionVentaMaxima = 0;
    for(let i=1; i < ventas.length; i++){
        if (ventas[i] > ventas[posicionVentaMaxima]){
            posicionVentaMaxima =i;
        }
    }
    return posicionVentaMaxima;
}

function calcularPromedioVentas(ventas, semanalMensual){
    let ventasAcumuladas = 0;
    for(let i=0; i< ventas.length; i++){
        ventasAcumuladas = ventasAcumuladas + ventas[i];
    }
    return ventasAcumuladas/semanalMensual;
}

function calcularMes(semana){
    return Math.floor(semana/4)+1;
    /* ALTERNATIVA SI NO SABEN USAR EL MATH.FLOOR
    if(semana < 4){
        return 1;
    } else if(semana < 8){
        return 2;
    }else{
        return 3;
    }*/
}

function calcularMejorVendedorSemanal(cantidadSemanas){
    //Este arreglo tiene las ventas de todos los vendedores por cada semana
    let ventasSemana;
    let ventasSemanales = new Array(cantidadSemanas);
    let mejorVendedorSemanal= new Array(cantidadSemanas);
    let posMejorVenta;
    for(let i=0; i<cantidadSemanas; i++){
        //Contiene todas las ventas de la semana i
        ventasSemana = [ camila[i], franco[i], sofia[i], matias[i], agustina[i]];
        posMejorVenta = calcularMax(ventasSemana);
        ventasSemanales[i] = ventasSemana[posMejorVenta];
        mejorVendedorSemanal[i] = vendedores[posMejorVenta];
    }
    console.log(`monto: ${ventasSemanales}`);
    console.log(`Vendedor/a: ${mejorVendedorSemanal}`);
}

function calcularMejorVendedorMensual(cantidadMeses){
    //Este arreglo tiene las ventas de todos los vendedores por cada mes
    let ventasMes = [0,0,0,0,0];
    let ventasMensuales = new Array(cantidadMeses);
    let mejorVendedorMensual= new Array(cantidadMeses);
    let posMejorVenta;
    let mes;
    for (let i=0; i< 12; i++){
        //Esto se puede hacer en otro for, lo hago asi para que quede mas claro.
        //Camila
        ventasMes[0] = ventasMes[0] + camila[i];
        //Franco
        ventasMes[1] = ventasMes[1] + franco[i];
        //Sofia
        ventasMes[2] = ventasMes[2] + sofia[i];
        //Matias
        ventasMes[3] = ventasMes[3] + matias[i];
        //Agustina
        ventasMes[4] = ventasMes[4] + agustina[i];

        //si la semana siguiente es un nuevo mes, hago el calculo del maximo
        if( (i+1) % 4 == 0){
            mes = Math.floor(i/4);
            console.log(`Ventas a comparar: ${ventasMes}`)
            posMejorVenta = calcularMax(ventasMes);
            ventasMensuales[mes] = ventasMes[posMejorVenta];
            mejorVendedorMensual[mes] = vendedores[posMejorVenta];
            ventasMes=[0,0,0,0,0];
        }
    }
    console.log(`monto: ${ventasMensuales}`);
    console.log(`Vendedor/a: ${mejorVendedorMensual}`);
}

let posVentaMaxima = calcularMax(camila);
let posVentaMinima = calcularMin(camila);
let cantidadSemanas = 12;
let cantidadMeses = 3;

//Ej 1
console.log(`Camila tiene una venta maxima de ${camila[posVentaMaxima]} en su semana ${posVentaMaxima}, mes ${calcularMes(posVentaMaxima)}`);
//Ej 2
console.log(`Camila tiene una venta minima de ${camila[posVentaMinima]} en su semana ${posVentaMinima}, mes ${calcularMes(posVentaMinima)}`);
//Ej 3 y 4
console.log(`Camila tiene un promedio semanal de ventas de ${calcularPromedioVentas(camila, cantidadSemanas)} y un promedio mensual de ${calcularPromedioVentas(camila,cantidadMeses)}`)

//Ej 5
console.log('');
console.log("Nombre y monto vendido del mejor de cada semana");
calcularMejorVendedorSemanal(cantidadSemanas);

//Ej 6
console.log('');
console.log("Nombre y monto vendido del mejor de cada semana");
calcularMejorVendedorMensual(cantidadMeses);