import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
    {nombre: "juan", edad: 13, habilitado: true},
    {nombre: "marco", edad: 54, habilitado: false},
    {nombre: "julia", edad: 78, habilitado: true},
    {nombre: "maria", edad: 90, habilitado: false},
    {nombre: "marta", edad: 56, habilitado: true},
    {nombre: "jorge", edad: 33, habilitado: true},
    {nombre: "isela", edad: 10, habilitado: false},
    {nombre: "omar", edad: 34, habilitado: false},
    {nombre: "juana", edad: 5, habilitado: true},
    {nombre: "julio", edad: 75, habilitado: false}
  ]

  votos = 0;
  habilitados = this.data.filter(s => s.habilitado).length;
  deshabilitados = this.data.filter(s => !s.habilitado).length;

  finish = false;

  votar(event){
    this.votos++;
    this.finish = this.votos >= this.habilitados;
    let index = this.data.findIndex(s => s.nombre === event);
    this.data.splice(index,1);
  }
}
