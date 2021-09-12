import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Producto from './Producto';

@Injectable()
export class ProductoService {
  private listaProductos: Producto[] = [];

  public constructor() {
    this.loadProductos();
  }

  getProductos(
    nombre?: string,
    limite?: number,
    pagina: number = 1,
  ): Producto[] {
    if (!nombre && !limite) {
      return this.listaProductos;
    }

    let productos = this.listaProductos;

    if (nombre) {
      // filtrar todos los productos que contienen el "nombre" recibido por parametro
      productos = this.listaProductos.filter((producto) =>
        producto.getNombre().includes(nombre),
      );
    }

    if (limite) {
      // obtener solo la porcion de los elementos segun la pagina y limites solicitados
      let inicio: number = (pagina - 1) * limite;
      productos = productos.splice(inicio, limite);
    }

    return productos;
  }

  public getProducto(id: number): Producto {
    let producto = null;
    // Más adelante agregar manejo de status code
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.listaProductos[i].getId() == id) {
        producto = this.listaProductos[i];
      }
    }
    return producto;
  }

  private loadProductos(): void {
    let archivo = fs.readFileSync('productos.csv', 'utf8');

    const elementos = archivo
      .split('\n')
      .map((p) => p.replace('\r', ''))
      .map((p) => p.split(','));

    for (let i = 0; i < elementos.length; i++) {
      let producto = new Producto(
        parseInt(elementos[i][0]),
        elementos[i][1],
        parseFloat(elementos[i][2]),
      );
      this.listaProductos.push(producto);
    }
  }
}
