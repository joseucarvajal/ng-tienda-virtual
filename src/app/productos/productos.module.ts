import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ListarComponent, CrearComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListarComponent,
    CrearComponent
  ]
})
export class ProductosModule { }
