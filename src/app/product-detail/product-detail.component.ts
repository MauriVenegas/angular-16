import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { productsList, Product } from '../products/products.mocks'
import { Location } from '@angular/common';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct
  products: IProduct[] = []
  loading: boolean = true
  color: string = ''
  constructor(private _route: ActivatedRoute, private _location: Location, private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      this.products = data
    })

    // Obtiene el parámetro pasado por la url
    this._route.params.subscribe({
      next: (params: Params) => {
        const id: number = Number(params['productId'])
        this._apiService.getProduct(id).subscribe({
          next: (data: IProduct) => {
            this.product = data
            this.color = this.product?.price as number > 100 ? 'red' : ''
            this.loading = false
          },
          error: (error: any) => {
            console.log(error)
            this.loading = false
          },
        })
      }
    })
  }

  goBack(): void {
    this._location.back()
  }

}
