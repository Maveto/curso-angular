import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  sw = true;

  constructor(){}

  ngOnInit(){    
  }

  onClickSaveChild(event){
    console.log(event)
  }
}
