import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color;
  @Input() secondColor

  @HostListener('mouseenter') mouseEnter(){
    this.changeColor(this.color);
    //this.changeColor("#18E406");
  }

  @HostListener('mouseleave') mouseLeave(){
    this.changeColor(this.secondColor);
    //this.changeColor("#08B4B5");
  }

  constructor(private el: ElementRef) {
    this.changeColor("#08B4B5");
  }

  changeColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}