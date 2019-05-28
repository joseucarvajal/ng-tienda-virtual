import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/model/services/producto.service';
import { Producto } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  listaProductos:Producto[];

  constructor(private productoService: ProductoService) {
    this.listaProductos = [];
  }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      (productos:Producto[])=>{
        this.listaProductos = productos;        
      },
      (err)=>{
        alert('Error al obtener productos');
        console.log('list-error', err);
      }
    );
  }

}
