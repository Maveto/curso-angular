import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @HostListener('mouseenter') mouseEnter(){
    this.changeColor("#18E406");
  }

  @HostListener('mouseleave') mouseLeave(){
    this.changeColor("#08B4B5");
  }

  constructor(private el: ElementRef) {
    this.changeColor("#08B4B5");
  }

  changeColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}