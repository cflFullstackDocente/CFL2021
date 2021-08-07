import * as rl from "readline-sync";
import Tragamonedas from "./Tragamonedas";
import TragamonedasEspecial from "./TragamonedasEspecial";

export default class Casino {
  private tragamonedas: Tragamonedas;
  private tragamonedasEspecial: TragamonedasEspecial;

  public constructor(txtConfig: string, tgResultados: string, tgEspResultados: string) {
    this.tragamonedas = new Tragamonedas(txtConfig, tgResultados);
    this.tragamonedasEspecial = new TragamonedasEspecial(txtConfig, tgEspResultados);
  }

  public jugar() {
    let opcion = rl.questionInt("Elija que juego desea jugar:\n1-Tragamonedas\n2-Tragamonedas Especial\n");
    // en ambos casos llamamos al metodo "jugar",
    // cada clase lo implementa de manera diferente (Polimorfismo)
    if (opcion == 1) {
      this.tragamonedas.jugar();
    } else if (opcion == 2) {
      this.tragamonedasEspecial.jugar();
    }
  }
}
