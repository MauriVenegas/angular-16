import { Component, OnInit } from '@angular/core';
// import { productsList, Product } from './products.mocks'
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = []
  loading: boolean = true

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      this.products = data;
      this.loading = false
    })
  }

}
