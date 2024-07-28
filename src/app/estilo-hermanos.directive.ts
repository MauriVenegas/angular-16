import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private elment: ElementRef) {
    this.elment.nativeElement.style.background = 'yellow';
  }

}
