import * as fs from "fs";

export default class GestorArchivos {
  private txtConfiguracion: string;
  private txtResultados: string;

  public constructor(txtConfiguracion: string, txtResultados: string) {
    this.txtConfiguracion = txtConfiguracion;
    this.txtResultados = txtResultados;
  }

  public leerTxt(): string[] {
    return fs.readFileSync(this.txtConfiguracion, "utf-8").split(",");
  }

  public guardarResultado(resultado: string): void {
    fs.appendFileSync(this.txtResultados, resultado);
  }
}
