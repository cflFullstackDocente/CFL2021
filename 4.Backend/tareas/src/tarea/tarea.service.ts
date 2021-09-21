import { Injectable } from '@nestjs/common';
import Tarea from './tarea';
import * as FS from 'fs';

@Injectable()
export class TareaService {
    private tareas: Tarea[] = [];

    constructor() {
        this.cargarDatos();
    }
    // metodos publicos
    public getTareas() : Tarea[] {
        return this.tareas;
    }
    public getTarea(id: number) : Tarea {
        // for (let tarea of this.tareas) {
        //     if (tarea.getIdTarea()==id)
        //         return tarea;
        // }
        // return null;
        //
        return this.tareas.find(tarea => tarea.getIdTarea() == id);
        //
    }
    public addTarea(tarea: any) {
        let id = this.generarId();
        this.tareas.push(new Tarea(id, tarea.nombre));
        this.guardarDatos();
    }
    public delTarea(id: number) {
        let posicion = this.tareas.findIndex(tarea => tarea.getIdTarea() == id);
        this.tareas.splice(posicion,1);
        this.guardarDatos();
    }
    // metodos privados
    private generarId() : number {
        return this.tareas.length+10000;        
    }
    // persistencia
    private cargarDatos() {
        let texto = FS.readFileSync('datos.csv','utf-8');
        this.tareas = texto.split('\r\n').map(linea => linea.split(',')).map(dato => new Tarea(parseInt(dato[0]),dato[1],(dato[2]=="SI")));
    }
    private guardarDatos() {
        let datos: string = '';
        for (let tarea of this.tareas) {
            datos+=`\r\n${tarea.getIdTarea()},${tarea.getNombreTarea()},${tarea.getEstadoTarea()?"SI":"NO"}`
        }
        FS.writeFileSync('datos.csv', datos.substr(2));
    }
}
