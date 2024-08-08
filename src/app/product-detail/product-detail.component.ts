import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsList, Product } from '../products/procucts.mocks'
import { Location } from '@angular/common';


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
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    // Obtiene el parámetro pasado por la url
    setTimeout(() => {
      this.route.params.subscribe(params => {
        this.product = this.products.find(
          product => product.id === parseInt(params['productId']
          ))
        this.color = this.product?.price as number > 5 ? 'red' : ''
        this.loading = false
      })
    }, 500)

  }

  goBack(): void {
    this.location.back()
  }

}
