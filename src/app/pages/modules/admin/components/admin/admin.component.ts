import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //nameControl = new FormControl();

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: '',
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

  /*onEnviar(): void{
    console.log('VALOR', this.nameControl.value);
  }*/

  onEnviar2(): void{
    console.log('FORM GROUP', this.productForm.value);
  }

}
