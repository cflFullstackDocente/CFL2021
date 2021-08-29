import Alumno from "./alumno";
import Espectador from "./espectador";
import Tripulante from "./tripulante";
import Votante from "./Votante";

export default class Persona {
    private dni:number;
    private nombre:string;
    private edad:number;
    private altura:number;
    private peso:number;
    
    constructor(dni:number,nombre:string,edad:number,altura:number,peso:number) {
        this.dni=dni;
        this.nombre=nombre;
        this.edad=edad;
        this.altura=altura;
        this.peso=peso;
    }
    
    public getDni(): number { return this.dni; }
    public setDni(dni: number): void { this.dni = dni; }
    public getNombre(): string { return this.nombre; }
    public setNombre(nombre: string): void { this.nombre = nombre; }
    public getEdad(): number { return this.edad; }
    public setEdad(edad: number): void { this.edad = edad; }
    public getAltura(): number { return this.altura; }
    public setAltura(altura: number): void { this.altura = altura; }
    public getPeso(): number { return this.peso; }
    public setPeso(peso: number): void { this.peso = peso; }
    public mostrar(): string { 
        return `Persona { D: ${this.dni}, N: ${this.nombre}, E: ${this.edad}, A: ${this.altura}, P: ${this,this.peso}}` 
    }
}