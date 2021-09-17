import Persona from "./persona";

export default class Votante extends Persona {
    private nroOrden: number;
    private mesa: string;
    private voto: boolean;
    
    constructor(dni:number,nombre:string,edad:number,nroOrden:number,mesa:string) {
        super(dni,nombre,edad,0,0);
        this.nroOrden=nroOrden;
        this.mesa=mesa;
        this.voto=false;
    }
    
    public getNroOrden(): number { return this.nroOrden; }
    public setNroOrden(nroOrden: number): void { this.nroOrden = nroOrden; }
    public getMesa(): string { return this.mesa; }
    public setMesa(mesa: string): void { this.mesa = mesa; }
    public isVoto(): boolean { return this.voto; }
    public setVoto(voto: boolean): void { this.voto = voto; }

    public static comparador(persona1: Persona, persona2: Persona): number {
        //por nombre alfabetico de menor a mayor
        if (persona1.getNombre()>persona2.getNombre())
            return -1;
        else
            return 1;
    }
}