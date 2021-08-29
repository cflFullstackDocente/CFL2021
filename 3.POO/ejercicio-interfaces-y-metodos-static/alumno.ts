import Persona from "./persona";

export default class Alumno extends Persona {
    private fila:number;
    private posicion:number;
    
    constructor(nombre:string, edad:number, altura:number) {
        super(0,nombre,edad,altura,0);
        this.fila=edad;
        this.posicion=0;
    }
            
    public getFila(): number { return this.fila; }
    public setFila(fila: number): void { this.fila = fila; }
    public getPosicion(): number { return this.posicion; }
    public setPosicion(posicion: number): void { this.posicion = posicion; }

    public static comparador(persona1: Persona, persona2: Persona): number {
        //por edad y altura de menor a mayor
        if (persona1.getEdad() > persona2.getEdad())
            return -1
        else
            if (persona1.getEdad() < persona2.getEdad())
                return 1
            else
                if (persona1.getAltura() > persona2.getAltura())
                    return -1;
                else
                    return 1;
    }
}