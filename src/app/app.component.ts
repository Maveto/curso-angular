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

  auxval:number = 2;
  auxexp:number = 1;

  numbers = [1,2,3,4,5,6,7,8,9,10];

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
    console.log(this.pura(2,3));  
    console.log(this.impura(2,3));    
  }

  pura(a: number, b: number){
    return a + b;
  }

  impura(a:number, b:number){
    return a + b + Math.random();
  }

  onClickSaveChild(event){
    console.log(event)
  }
}
