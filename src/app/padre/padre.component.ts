import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  hermanoGrande?: string

  // Forma antigua
  // constructor(private _servicioFamiliar: ServicioFamiliarService) { }
  // nueva forma de inyectar dependencias
  private _servicioFamiliar = inject(ServicioFamiliarService)

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan')
    this.hermanoGrande = this._servicioFamiliar.getHermanoGrande()
  }

  valorContador: number = 0
  mensajePadre: string = 'Mensaje desde el padre'
  enviarMensaje: boolean = false
  mensajeHijo?: string
  fecha?: Date = new Date()

  incrementar() {
    this.valorContador++
  }

  decrementar() {
    this.valorContador--
  }

  getMensaje(mensaje: string) {
    this.mensajeHijo = mensaje
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '')
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }
}
