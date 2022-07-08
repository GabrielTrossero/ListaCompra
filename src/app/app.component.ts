import { Component } from '@angular/core';
import { Producto } from './models/productos.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  productosSeleccionados: Producto[];
  productosComprados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.productosComprados = [];
  }

  onProductoCreado($event){
    this.productosSeleccionados.push($event);
  }

  onProductoComprado($event){
    this.productosComprados.push($event);
    this.productosSeleccionados.splice($event, 1);
  }

  onProductoNoComprado($event){
    this.productosSeleccionados.push($event);
    this.productosComprados.splice($event, 1);
  }

}
