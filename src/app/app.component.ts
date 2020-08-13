import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  sw = true;
  persons = ["maria", "juan", "pedro", "jose", "josefina"]
  aux = 2;
  auxColor = 'red';
  auxClass = true;
  name = 'Mauricio'

  persons1 = [
    {
      name:'Juan',
      lastName:'Perez',
      age:21,
      enable: true
    },
    {
      name:'Jose',
      lastName:'Flores',
      age:21,
      enable: true
    },
    {
      name:'Maria',
      lastName:'Rodriguez',
      age:21,
      enable: false
    },
    {
      name:'Gariela',
      lastName:'Arce',
      age:21,
      enable: false
    }
  ]

  constructor(){}

  ngOnInit(){    
  }

  onClickSaveChild(event){
    console.log(event)
  }
}
