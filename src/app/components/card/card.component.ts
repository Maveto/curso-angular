import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() nombre: string;
  @Input() edad: number;
  @Input() habilitado: boolean;

  @Output() votar = new EventEmitter();

  constructor() { }

  clickVotar(){
    this.votar.emit(this.nombre);
  }

}