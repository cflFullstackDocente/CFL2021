import { Controller, Get, Param, Query } from '@nestjs/common';
import Producto from './Producto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  getProductos(
    @Query('nombre') nombre?: string,
    @Query('limite') limite?: number,
    @Query('pagina') pagina?: number,
  ): Producto[] {
    return this.productoService.getProductos(nombre, limite, pagina);
  }

  @Get(':id')
  public getProducto(@Param('id') id): Producto {
    return this.productoService.getProducto(parseInt(id));
  }
}
