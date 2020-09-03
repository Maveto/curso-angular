import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../../../services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  // nameControl = new FormControl();

  productForm: FormGroup;
  products = [];
  productSubsAdd: Subscription;
  productSubsGet: Subscription;
  productSubsDelete: Subscription;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {

    this.loadProducts();

    this.productForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

  loadProducts(): void{
    this.products = [];
    this.productSubsGet = this.productService.getProducts().subscribe(res => {
        Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      }
    );
  }

  /*onEnviar(): void{
    console.log('VALOR', this.nameControl.value);
  }*/

  onEnviar2(): void{
    console.log('FORM GROUP', this.productForm.value);
    this.productSubsAdd = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log(res);
        this.loadProducts();
      },
      error => {
        console.log('ERROR DE SERRVIDOR', error);
      }
    );
  }

  onDelete(id: any): void{
    this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE', res);
        this.loadProducts();
      },
      error => {
        console.log('ERROR', error);
      }
    );
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.productSubsAdd ? this.productSubsAdd.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.productSubsGet ? this.productSubsGet.unsubscribe() : '';
  }

}
