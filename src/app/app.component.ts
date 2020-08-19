import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
    {nombre: "juan", edad: 13, habilitado: true, voto: false},
    {nombre: "marco", edad: 54, habilitado: false, voto: false},
    {nombre: "julia", edad: 78, habilitado: true, voto: false},
    {nombre: "maria", edad: 90, habilitado: false, voto: false},
    {nombre: "marta", edad: 56, habilitado: true, voto: false},
    {nombre: "marta", edad: 56, habilitado: true, voto: false},
    {nombre: "jorge", edad: 33, habilitado: true, voto: false},
    {nombre: "isela", edad: 10, habilitado: false, voto: false},
    {nombre: "omar", edad: 34, habilitado: false, voto: false},
    {nombre: "juana", edad: 5, habilitado: true, voto: false},
    {nombre: "julio", edad: 75, habilitado: false, voto: false}
  ]

  votos = 0;
  habilitados = this.data.filter(s => s.habilitado).length;
  deshabilitados = this.data.filter(s => !s.habilitado).length;

  finish = false;

  votar(event){
    this.votos++;
    this.checkVotos();
    console.log(this.data[this.data.indexOf(event)]);
  }

  checkVotos(){
    this.finish = this.votos == this.habilitados;
  }


}
