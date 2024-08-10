import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges, OnInit {

  @Input() tipoDni?: string
  formularioDni: FormGroup
  newTipoDni?: string
  // Crea un evento Emitter para enviar un valor el padre 
  @Output() dniEvent = new EventEmitter<string>()

  constructor(private form: FormBuilder) {
    this.formularioDni = this.form.group({
      dni: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    // Realiza una acción cada vez que cambie el dni
    this.formularioDni.get('dni')?.valueChanges.subscribe((valor) => {
      this.dniEvent.emit(valor)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tipoDni']?.currentValue) {
      this.newTipoDni = changes['tipoDni'].currentValue
    }
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formularioDni.get(controlName)?.hasError(errorType) &&
      this.formularioDni.get(controlName)?.touched
  }

}
