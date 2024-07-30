import { Component } from '@angular/core';
import { productsList, Product } from './procucts.mocks'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = productsList

}
