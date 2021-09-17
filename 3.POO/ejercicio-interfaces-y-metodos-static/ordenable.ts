import Persona from "./persona";

export default interface Ordenable {
    comparador(criterio: string, persona1: Persona, persona2: Persona): number;
}