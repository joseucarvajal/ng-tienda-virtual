import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.sass']
})
export class CrearComponent implements OnInit {

  producto: Producto;

  constructor() { }

  ngOnInit() {
    this.producto = new Producto();
  }

}
