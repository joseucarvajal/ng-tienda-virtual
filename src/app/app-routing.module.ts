import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearComponent } from './productos/crear/crear.component';
import { ListarComponent } from './productos/listar/listar.component';

const routes: Routes = [
  {path: 'productos/crear', component: CrearComponent},
  {path: 'productos/listar', component: ListarComponent},
  {path: '', redirectTo: 'productos/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
