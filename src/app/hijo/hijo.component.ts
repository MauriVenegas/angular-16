import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() mensajeRecibido?: string
  mensaje: string = '';
  valorContador: number = 0
  @Output() mensajeEvent = new EventEmitter<string>()
  @Output() incrementarEvent = new EventEmitter<void>()
  @Output() decrementarEvent = new EventEmitter<void>()

  enviarMensaje() {
    this.mensajeEvent.emit(this.mensaje)
  }

  incrementar() {
    this.incrementarEvent.emit()
  }
  decrementar() {
    this.decrementarEvent.emit()
  }
}
