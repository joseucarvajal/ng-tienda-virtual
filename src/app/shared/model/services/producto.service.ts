import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/shared/model/product.model';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  saveProducto(producto: Producto): Observable<Producto> {
    return new Observable<Producto>((observer) => {
      this.httpClient.post(`${environment.backEndBaseURL}`, producto)
        .subscribe((savedPost: Producto) => {
          observer.next(savedPost);
        });
    });
  }

  getProductos(): Observable<Array<Producto>> {
    return this.httpClient
      .get<Array<Producto>>(`${environment.backEndBaseURL}`)
      .pipe(
        map((productos: Array<Producto>) => {
          return productos.map((producto: Producto) => {
            producto.urlFoto = environment.backEndBaseURL + '/images/' + producto.id;
            return producto;
          });
        })
      );
  }

}
