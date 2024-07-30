import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  producto?: string
  constructor(private _rout: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtiene el parámetro pasado por la url
    this._rout.params.subscribe(params => {
      this.producto = params['productId']
    })
  }

}
