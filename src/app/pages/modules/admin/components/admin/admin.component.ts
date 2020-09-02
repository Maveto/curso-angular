import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //nameControl = new FormControl();

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
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
    this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log('ERROR DE SERRVIDOR');
      }
    );
  }

}
