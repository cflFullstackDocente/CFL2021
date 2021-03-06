import Persona from "./persona";

export default class Tripulante extends Persona {
    private lado: string;
    
    constructor(nombre: string, peso:number) {
        super(0,nombre,0,0,peso);
        this.lado='';
    }
    
    public getLado(): string { return this.lado; }
    public setLado(lado: string): void { this.lado = lado; }

    public static comparador(persona1: Persona, persona2: Persona): number {
        //por peso de menor a mayor
        if (persona1.getPeso()>persona2.getPeso())
            return -1;
        else
            return 1;
    }
}