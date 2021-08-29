import GestorArchivos from "../Librerias/GestorArchivos"
import Persona from "./persona";
import Alumno from "./alumno";
import Espectador from "./espectador";
import Tripulante from "./tripulante";
import Votante from "./Votante";

import Ordenable from "./ordenable";

export default class Ordenador implements Ordenable {
    private listaPersonas: Persona[];
      
    constructor() {
        let ga: GestorArchivos= new GestorArchivos('./personas.txt','\r\n',';');
        this.listaPersonas=[];
        for (let i=0; i<ga.getCantidadRegistros(); i++) {
            let datos = ga.retornarRegistro(i);
            this.listaPersonas.push(new Persona(parseInt(datos[0]),
            datos[1],
            parseInt(datos[2]),
            parseFloat(datos[3]),
            parseFloat(datos[4])));          
        }
    }
    public getPersonas(): Persona[] {
        return this.listaPersonas;
    }
    public getTamañoLista(): number {
        return this.listaPersonas.length;
    } 
    public getPersona(pos: number): Persona {
        return this.listaPersonas[pos];
    }
    public mostrarLista(): void {
        console.log(`Ordenado segun carga de datos.`);        
        for (let i = 0; i<this.listaPersonas.length; i++) {
            console.log(this.listaPersonas[i].mostrar());            
        }
    }
    public comparador(criterio:string, p1: Persona, p2: Persona): number {
        switch (criterio) {
            case 'alumno': {
                return Alumno.comparador(p1, p2);
            }
            case 'espectador': {
                return Espectador.comparador(p1, p2);
            }
            case 'tripulante': {
                return Tripulante.comparador(p1, p2);
            }
            case 'votante': {
                return Votante.comparador(p1, p2);
            }
        }
    }
    public ordenar(criterio: string) {
        let lAux: Persona[] = [];
        let cntP: number = this.listaPersonas.length;
        for (let i = 0; i < cntP; i++) {
            lAux[i]=this.listaPersonas[i];
        }
       this.burbuja(lAux, criterio);
        console.log(`Ordenado segun criterio de ${criterio.toUpperCase()}:`);        
        for (let i = 0; i < cntP; i++) {
            console.log(lAux[i].mostrar());
        }
    }   
    private burbuja(lista: Persona[], criterio: string) {
        let i: number, j: number;
        let cbio: boolean = false;
        let auxi: Persona;
        for (i = 0 ; i < lista.length; i++) {
            for (j = 0 ; j < (lista.length - i - 1); j++) {
                if (this.comparador(criterio, lista[j], lista[j+1])==-1) {
                    auxi = lista[j];
                    lista[j] = lista[j+1];
                    lista[j+1] = auxi;
                }
            }
        }
    }
}