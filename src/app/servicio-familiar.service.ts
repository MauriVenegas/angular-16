import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {
  hermanoGrande?: string
  hermanoPequeno?: string

  getHermanoGrande(): string {
    return this.hermanoGrande || ''
  }
  setHermanoGrande(hermanoGrande: string): void {
    this.hermanoGrande = hermanoGrande
  }
  getHermanoPequeno(): string {
    return this.hermanoPequeno || ''
  }
  setHermanoPequeno(hermanoPequeno: string): void {
    this.hermanoPequeno = hermanoPequeno
  }

  saludar(hermano: string): void {
    console.log(`Hola ${hermano}`)
  }

  preguntarPorHijo() {
    return '¿Como esta tu hijo?'
  }

  constructor() { }
}
