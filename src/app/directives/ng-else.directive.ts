import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input()
  set ngEsle(condition: boolean){
    if (condition){
      this.viewContainer.clear();
    }else{
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
