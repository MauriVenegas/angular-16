# Angular 16

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## 🛠️ Tecnologías
### Input()
Envía propiedades al hijo

Enviada desde el padre
```html
<app-hijo [mensajeRecibido]="mensajePadre" />
```
Recibe desde el hijo
```typescript
// Recibe el 'username' desde el padre 'user'
@Input() mensajeRecibido?: string
```

### Output()
Envía propiedades al padre

Desde el hijo
```html
<label for="entrada">Escriba mensaje a enviar al padre</label>
<br>
<input type="text" [(ngModel)]="mensaje">
<button (click)="enviarMensaje()">Enviar mensaje</button>
```
```typescript
// Crea un evento Emitter para enviar un valor el padre 
@Output() mensajeEvent = new EventEmitter<string>()
enviarMensaje() {
  this.mensajeEvent.emit(this.mensaje)
}
```
Desde el padre
```html
// Recibe el evento enviado desde el hijo
<app-games (mensajeEvent)="getMensaje($event)" />
```
```typescript
mensajeHijo?: string
getMensaje(mensaje: string) {
  this.mensajeHijo = mensaje
}
```

### Servicios
Se utiliza para organizar y compartir lógica, datos o funcionalidades comunes entre diferentes componentes, estos no están relacionados directamente con la interfaz de usuario.

```
ng generate service nombre-servicio
```

```typescript
import { Injectable } from '@angular/core'
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
Son los recursos externos y módulos de código que una aplicación necesita para funcionar correctamente. Estos recursos pueden incluir bibliotecas externas, módulos de Angular, servicios personalizados o componentes. Estas se gestionan a través de la inyección de dependencias.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { MiServicio } from ' ./mi-servicio.service';
@Component ({ 
  selector: 'app-mi-componente'
  templateUr1: "./mi-componente.component.html"
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

### Directivas
Son funcionalidades para manipular el DOM, Angular posee directivas incorporadas y también la creación de directivas personalizas.

```
ng generate directive nombre-directiva
```
```typescript
// nombre-directiva.ts
import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[nombreDirectiva]'
})
export class MiDirectivaDirective {
  constructor (private el: ElementRef) {
    // Accede al elemento del DOM en el que se aplica la directiva (this.el.nativeElement)
    this.el.nativeElement.style.backgroundColor='yellow';
  }
}
```
```html
<div nombreDirectiva>
  Este en un elemento con mi directiva personalizada.
</div>
```

### Pipes
Nos permiten formatear y transformar los datos de la vista. Ejemplo: formateo de fechas, números, textos a mayúscula, minúscula etc.

```
ng generate pipe nombre-pipe
```
```typescript
// nombre-pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'nombrePipe'
})
export class NombrePipe implements PipeTransform {
  transform(valor: any): any {
    // Implementa la lógica de transformación aquí
    return valor.toUpperCase();
  }
}
```
```html
<p>{{ texto | nombrePipe }}</p>
```

### Errutamiento (Router)
Es la forma de navegar entre componentes sin recargar la pagina (SPA).

Archivo de rutas: [./src/app/app-routing.module.ts](./src/app/app-routing.module.ts)
Llamado de rutas: [./src/app/app.component.html](./src/app/app.component.html)

### Estructuras de control 
ngIf, ngFor, ngStyle, ngClass, ng-container

Ejemplos: 
- [./src/app/products/products.component.html](./src/app/products/products.component.html)
- [./src/app/product-detail/product-detail.component.html](./src/app/product-detail/product-detail.component.html)

### Formularios
Angular posee formularios basados en plantullas *FormsModule* y formularios rectivos *ReactiveFormsModule*.
- **FormsModule**: Los normales indeando a traves del model *[(ngModel)]="user.name"*
- **ReactiveFormsModule**: se declara un modelo especial que incluye acciones especiales como validadores, seteos, definiones de tipos, desabulitar campos, obtener el valor del formulario a medida que se relizen cambios etc. Ejemplo:
  - [./src/app/contact/contact.component.ts](./src/app/contact/contact.component.ts)
  - [./src/app/contact/contact.component.html](./src/app/contact/contact.component.html)

### Ciclos de vida
Mas usadas(*)
- ***ngOnChanges**: Se dispara cuando los datos de entrada (@lnput) del componente cambian (escuchas los cambios que haga el padre).
```typescript
export class MiComponente implements OnChanges {
  // Método ngOnChanges se llama cuando hay cambios en las propiedades de entrada
  ngOnChanges (changes: SimpleChanges): void {
    // Verifica si la propiedad de entrada 'nombreInput' ha cambiado
    if (changes.nombreInput) {
      this.nombre = changes.nombreInput.currentValue;
    }
  }
}
```
- ***ngOnlnit**: Ocurre después de que Angular ha inicializado todas las propiedades del componente.
```typescript
export class MiComponente implements OnInit {
  nombre: string;
  // El método ngOnInit se llama después que Angular ha inicializado todas las propiedades del componente.
  ngOnInit(): void {
    this.nombre = "Usuario':
    console.log( 'Hola, ${this.nombre}! El componente se ha inicializado')
  }
}
```

- **ngDoCheck**: Se ejecuta durante cada detección de cambios y permite realizar acciones de verificación personalizadas.
```typescript
export class MiComponente implements DoCheck {
  // Método ngDoCheck se llama durante cada detección de cambios
  ngDoCheck(): void {
    console. log('Se está ejecutando ngDoCheck');
    // Puedes realizar acciones de verificación personalizadas aquí
  }
}
```
- **ngAfterContentInit**: Ocurre después de que Angular haya proyectado el contenido en el componente.
```typescript
export class MiComponente implements AfterContentInit {
  // ContentChild para acceder a un elemento dentro ¿% contenido proyectado
  @ContentChild( 'nombreElemento') nombreElemento: ElementRef;
  // Método ngAfterContentInit se llama después de que Angular haya proyectado el contenido
  ngAfterContentInit(): void {
    // Realizar acciones después de que el contenido haya sido inicializado
    if
    (this.nombreElemento) {
      console.log ('Se ha encontrado un elemento con el nombre 'nombreElemento'.')
    }
  }
}
```

- **ngAfterContentChecked**: Se ejecuta después de cada verificación del contenido proyectado.
```typescript
export class MiComponente implements AfterContentChecked {
  // ContentChild para acceder a un elemento dentro del contenido proyectado
  @ContentChild('nombreElemento') nombreElemento: ElementRef;
  // Método ngAfterContentChecked se llama después de cada verificación del contenido proyectado
  ngAfterContentChecked(): void {
    // Realizar acciones después de cada verificación del contenido
    if (this.nombreElemento) {
      console. log('Se ha verificado el contenido y se ha encontrado un elemento con el nombre 'nombreElemento'.');
    }
  }
}
```

- **ngAfterViewlnit**: Ocurre después de que Angular haya inicializado las vistas del componente.
```typeScript
export class MiComponente implements AfterViewInit {
  // Viewchild para acceder a un elemento en la vista del componente
  @ViewChild('miParrafo') miParrafo: ElementRef;
  // Método ngAfterViewInit se llama después de que Angular haya inicializado las vistas del componente
  ngAfterViewInit(): void {
    // Realizar acciones después de que la vista haya sido inicializada
    if (this.miParrafo) {
      console. log('Se ha inicializado la vista y se ha encontrado un párrafo: $(this.miParrafo.nativeElement.textContent}');
    }
  }
}
```

- **ngAfterViewChecked**: Se ejecuta después de cada verificación de las vistas del componente.
```typescript
export class MiComponente implements AfterViewChecked {
  mensaje: string = '¡Hola, mundo!';

  // ViewChild para acceder a un elemento en la vista del componente
  @ViewChild ('miParrafo') miParrafo: ElementRef;

  // Método ngAfterViewChecked se llama después de cada verificación de las vistas del componente
  ngAfterViewChecked(): void {
    // Realizar acciones después de cada verificación de las vistas
    if (this.miParrafo) {
      console. log( 'Se ha verificado la vista y el contenido del párrafo es: $(this.miParrafo.nativeElement.textContent}');
    }
  }
}
```

- ***ngOnDestroy**: Se dispara justo antes de que Angular destruya el componente.
```typescript
export class MiComponente implements OnDestroy {
  // Ejemplo de suscripción a un observable 
  private subscription: Subscription;
  
  constructor () {
    // Simulación de suscripción a un observable
    this.subscription = new Subscription();
  }
  
  // El Método ngOnDestroy se llama justo antes de que Angular destruya el componente
  ngOnDestroy(): void {
    // Realizar limpieza, como describirse de observables o liberar recursos
    if (this.subscription) {
      this.subscription.unsubscribe();
      console. log('Se ha desuscrito de la suscripción en ngOnDestroy. ');
    }
  }
}
```

