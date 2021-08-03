import * as rl from "readline-sync";
import Tragamonedas from "./Tragamonedas";

export default class TragamonedasEspecial extends Tragamonedas {
  public constructor(txtConfiguracion: string, txtResultados: string) {
    super(txtConfiguracion, txtResultados);
    let config = this.gestorArchivos.leerTxt();
    this.probabilidad = parseInt(config[1]) / 100;
  }

  public jugar(): void {
    let probabilidadElegida = rl.questionInt("La probabilidad por defecto es 10%, desea cambiarla? (entre 1 y 75%), sino ingrese 0: ");

    if (probabilidadElegida != 0) {
      this.probabilidad = probabilidadElegida / 100;
    } else {
      this.probabilidad = 0.1;
    }

    this.procesarJugada();
  }
}

//FIRMA DE UN MÉTODO:
// - Nombre del método.
// - Cantidad, orden y tipo de los parámetros.
// - Tipo de retorno

// ES POLIMORFISMO CUANDO RESPETAMOS LA FIRMA DEL METODO QUE TIENE LA CLASE PADRE
// (lo unico que cambia es la lógica dentro del cuerpo de la función)

// en superclase:
// public hacerAlgo(nombre: string, n2: number): number {
//   return n2;
// }

// en subclase:
// public hacerAlgo(nombre: string , n2: number): number {
//   return n2 * 100;
// }

// NO ES POLIMORFISMO SI NO SE RESPETA LA FIRMA DEL METODO QUE TIENE LA CLASE PADRE:
// el nombre de la funcion no es identico y/o
// la cantidad de parametros es diferente y/o
// el orden de los parametros es diferente y/o
// el tipo de los parametros es diferente y/o
// la funcion retorna un tipo de dato diferente

// en superclase:
// public hacerAlgo(nombre: string, n2: number): number {
//   return 0;
// }

// en subclase:
// public hacerAlgo(n2: string, nombre: string, n3: string): string {
//   return "hola";
// }
