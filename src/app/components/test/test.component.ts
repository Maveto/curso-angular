import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChange
} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p> Nombre: {{name}}</p>
  <p>Lastname: {{lastName}}</p>
<!--button (click)="onClickSave()">SAVE</button--->`
})
export class TestComponent /*implements OnInit, DoCheck, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy*/ {

  inter: string;
  @Input() get name(){
    return this.inter;
  }
  set name(name: string){
    this.inter = 'AAAAAAAAAAAA ' + name;
  }

  @Input() lastName: string;



  @Output() clickSave = new EventEmitter();


  constructor() { }

  // ngOnInit() {
  //   console.log('OnInit', this.lastName);
  // }

  // ngDoCheck(){
  //   console.log('DoCheck');
  // }

  // ngOnChanges(changes: SimpleChange){

  //   if(changes && changes.lastName && changes.lastName.currentValue){
  //     console.log('OnChanges', changes.lastName.currentValue);
  //     const aux = "AAAAAAAAA " + changes.lastName.currentValue;
  //     this.lastName = aux;
  //   }
  // }

  // // ngAfterContentInit(){
  // //   console.log('ngAfterContentInit');
  // // }

  // // ngAfterContentChecked(){
  // //   console.log('ngAfterContentChecked');
  // // }

  // // ngAfterViewInit(){
  // //   console.log('ngAfterViewInit');
  // // }

  // // ngAfterViewChecked(){
  // //   console.log('ngAfterViewChecked');
  // // }

  // // ngOnDestroy(){
  // //   console.log('OnDestroy');
  // // }

  // onClickSave(){
  //   this.clickSave.emit({
  //     name: this.name
  //   })
  // }

}
