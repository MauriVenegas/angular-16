import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsList, Product } from '../products/procucts.mocks'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product
  products: Product[] = productsList
  loading: boolean = true
  color: string = ''
  constructor(private _rout: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtiene el parámetro pasado por la url
    setTimeout(() => {
      this._rout.params.subscribe(params => {
        this.product = this.products.find(
          product => product.id === parseInt(params['productId']
          ))
        this.color = this.product?.price as number > 5 ? 'red' : ''
        this.loading = false
      })
    }, 1500)

  }

}
