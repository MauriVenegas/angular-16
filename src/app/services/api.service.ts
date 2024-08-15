import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategosy, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'
  // constructor(private _httpClient: HttpClient) { }
  // Una alternativa para inyectar una dependencia sin usar el constructor
  private _httpClient = inject(HttpClient)

  // HttpClient retorna un Observable el cual permite el manejo de datos, errores y finalizar el manejo del observable
  public getAllProducts(sort?: string): Observable<IProduct[]> {
    const param = sort ? '/?sort=' + sort : ''
    return this._httpClient.get<IProduct[]>(`${this.baseURL}${param}`);
  }

  // Devuelve un observable de un producto 
  public getProduct(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  // Devuelve un observable de categorías
  public getAllCategories(): Observable<ICategosy[]> {
    return this._httpClient.get<ICategosy[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public UpdateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }

}