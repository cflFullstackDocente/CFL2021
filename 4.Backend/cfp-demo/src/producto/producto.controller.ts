import { Controller, Get, Param } from '@nestjs/common';
import Producto from './Producto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  getProductos() {
    return this.productoService.getProductos();
  }

  @Get(':id')
   public getProducto(@Param('id') id): Producto {
       return this.productoService.getProducto(parseInt(id));
   }
}
