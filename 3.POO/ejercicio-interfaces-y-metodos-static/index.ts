import Ordenador from "./ordenador";

let lista: Ordenador = new Ordenador();
lista.mostrarLista();
lista.ordenar('alumno');
lista.ordenar('espectador');
lista.ordenar('tripulante');
lista.ordenar('votante');
lista.mostrarLista();