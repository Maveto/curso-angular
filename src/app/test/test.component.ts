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
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p> Nombre: {{name}}</p>
<button (click)="onClickSave()">SAVE</button>`
})
export class TestComponent implements OnInit, DoCheck, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string;

  @Output() clickSave = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }

  ngDoCheck(){
    console.log('DoCheck');
  }

  ngOnChanges(){
    console.log('OnChanges');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('OnDestroy');
  }

  onClickSave(){
    this.clickSave.emit({
      name: this.name
    })
  }

}