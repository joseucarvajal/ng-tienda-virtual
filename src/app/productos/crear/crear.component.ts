import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/model/product.model';
import { ProductoService } from 'src/app/shared/model/services/producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  producto: Producto;

  constructor( private productoService: ProductoService ) { }

  ngOnInit() {
    this.producto = new Producto();
  }

  guardar() {
    this.productoService.saveProducto(this.producto)
      .subscribe((producto: Producto) => {
        alert('Producto guardado con exitosamente');
      });
  }

}
