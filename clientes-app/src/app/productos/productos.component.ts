
import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
  
})
export class ProductosComponent implements OnInit {
  producto: Producto[] = [];

  constructor(private clienteService: ProductoService) { }

  ngOnInit() {
    this.clienteService.getProductos().subscribe(
      productos  => this.producto = productos 
    );
  }
}