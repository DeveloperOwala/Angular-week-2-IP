import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.borderRadius= '%'
   }

}
