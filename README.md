# Angular 16

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## 🛠️ Tecnologías
### Input()
Envia propiedades al hijo
```typescript
// Enviada desde el padre
<app-hijo [mensajeRecibido]="mensajePadre" />
// recibe desde el hijo
// Recibe el 'username' desde el padre 'user'
@Input() mensajeRecibido?: string
```

### Output()
Envía propiedades al padre
```typescript
// Desde el hijo
<label for="entrada">Escriba mensaje a enviar al padre</label>
<br>
<input type="text" [(ngModel)]="mensaje">
<button (click)="enviarMensaje()">Enviar mensaje</button>

// Crea un evento Emitter para enviar un valor el padre 
@Output() mensajeEvent = new EventEmitter<string>()
enviarMensaje() {
    this.mensajeEvent.emit(this.mensaje)
  }

//Desde el padre
// Recibe el evento enviado desde el hijo
<app-games (mensajeEvent)="getMensaje($event)" />

mensajeHijo?: string
getMensaje(mensaje: string) {
  this.mensajeHijo = mensaje
}
```

### Servicios
Se utiliza para organizar y compartir lógica, datos o funcionalidades comunes entre diferentes componentes, estos no estan relacionados directamente con la interfaz de usuario.
```typescript
import { Injectable } from '@angular/core
@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  constructor () { }
  // Métodos y lógica del servicio
}
```
Ejemplo: [./src/app/servicio-familiar.service.ts](./src/app/servicio-familiar.service.ts)

### Dependencias
Son los recursos externos y módulos de código que una aplicación necesita para funcionar correctamente. Estos recursos pueden incluir bibliotecas externas, módulos de Angular, servicios personalizados o componentes. Estras se gestionan a través de la inyección de dependencias.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { MiServicio } from ' ./mi-servicio.service';
@Component ({ 
  selector: 'app-mi-componente'
  templateUr1: "./mi-componente.component.html'
})
export class MiComponente implements OnInit {
  // Antes de Angular 15
  constructor (private _miServicio: MiServicio)
  // Después de Angular 15
  private _miServicio = inject(MiServicio)

  ngOnInit(): void {...}
  //...
}
```

