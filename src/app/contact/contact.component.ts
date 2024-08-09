import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup
  usuarioActivo: any = {
    name: 'Mario',
    familyName: 'Castro'
  }
  tipoDni: string = ''

  constructor(private _form: FormBuilder) {
    this.contactForm = this._form.group({
      name: ['', []],
      familyName: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  // Carga las funciones y/o métodos a penas carga el componente
  ngOnInit(): void {
    // Agregar validador a un campo
    this.contactForm.get('name')?.setValidators([Validators.required, Validators.minLength(3)]);
    // Quitar validaciones
    this.contactForm.get('name')?.clearValidators();
    this.contactForm.get('name')?.updateValueAndValidity()

    // Setea el campo name
    // this.contactForm.get('name')?.setValue(this.usuarioActivo.name)
    // Para setear varios campos
    this.contactForm.patchValue({
      familyName: this.usuarioActivo.familyName,
      name: this.usuarioActivo.name,
    })

    // Deshabilita el campo name para que el valor no se puede modificar
    this.contactForm.get('name')?.disable()
    this.contactForm.get('familyName')?.disable()

    // Obtiene el valor del formulario a medida que este valla cambiando
    this.contactForm.valueChanges.subscribe((valor) => {
      // console.log(valor)
    })
    // Realiza una acción según el tipo de DNI seleccionado
    this.contactForm.get('tipoDni')?.valueChanges.subscribe((valor) => {
      this.tipoDni = valor
    })
  }

  hasErrors(controlName: string, errorType: string) {
    return this.contactForm.get(controlName)?.hasError(errorType) &&
      this.contactForm.get(controlName)?.touched
  }

  submit() {
    if (this.contactForm.invalid) {
      // Marca los campos inválidos
      this.contactForm.markAllAsTouched()
    } else {
      let form = {
        name: '',
        familyName: '',
        tipoDni: '',
        dni: '',
        email: '',
      }
      form = { ...this.contactForm.value }
      form.name = this.contactForm.get('name')?.value
      form.familyName = this.contactForm.get('familyName')?.value

      console.log(form)
      // this.contactForm.reset()
    }
  }

}
