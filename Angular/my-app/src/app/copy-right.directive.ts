import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[CopyRight]',
  standalone: true
})
export class CopyRightDirective {

  constructor(el:ElementRef) {
    let Year = new Date().getFullYear();
    const targetEl:HTMLElement = el.nativeElement;  
    targetEl.textContent = `CopyRight @ ${Year}, All Rights are Reserved.`;
  }
  

}
