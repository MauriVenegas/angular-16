import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {

  // Forma antigua
  // constructor(private _servicioFamiliar: ServicioFamiliarService) { }
  // nueva forma de inyectar dependencias
  private _servicioFamiliar = inject(ServicioFamiliarService)


  hermanoPequeno?: string
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('Pedro')
    this.hermanoPequeno = this._servicioFamiliar.getHermanoPequeno()
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '')
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

}
