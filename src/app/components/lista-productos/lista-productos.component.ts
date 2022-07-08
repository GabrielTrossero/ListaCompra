import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/productos.models';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];
  @Input() textoBoton: string;
  @Output() productoComprado: EventEmitter<Producto>

  constructor() { 
    this.productoComprado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(indice){
    this.productoComprado.emit(indice);
  }

}
