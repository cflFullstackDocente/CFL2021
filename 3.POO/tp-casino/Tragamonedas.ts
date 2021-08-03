import * as rl from "readline-sync";
import GestorArchivos from "./GestorArchivos";

export default class Tragamonedas {
  protected probabilidad: number;
  protected gestorArchivos: GestorArchivos;

  public constructor(txtConfiguracion: string, txtResultados: string) {
    this.gestorArchivos = new GestorArchivos(txtConfiguracion, txtResultados);
    let config = this.gestorArchivos.leerTxt();
    this.probabilidad = parseInt(config[0]) / 100;
  }

  public jugar(): void {
    this.procesarJugada();
  }

  protected procesarJugada(): void {
    let apuesta = rl.questionInt("Ingrese el monto a apostar: ");
    let numerAzar = Math.random();
    let resultado = apuesta;
    if (numerAzar <= this.probabilidad) {
      resultado = (1 / this.probabilidad) * apuesta;
      console.log(`Jugador gana: $${resultado}`);
      this.gestorArchivos.guardarResultado(resultado * -1 + ",");
    } else {
      console.log(`La casa gana: $${resultado}`);
      this.gestorArchivos.guardarResultado(resultado + ",");
    }
  }
}
