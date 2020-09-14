import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';

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
  productSubsUpdate: Subscription;
  editId: any;

  edit: boolean;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.edit = false;

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
    const userId = this.authService.getUserId();
    this.productSubsGet = this.productService.getProductsById(userId).subscribe(res => {
        Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      }
    );
  }

  /*onEnviar(): void{
    console.log('VALOR', this.nameControl.value);
  }*/

  onEnviar2(): void{
    console.log('FORM GROUP', this.productForm.value);
    this.productSubsAdd = this.productService.addProduct({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
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
    this.productSubsDelete = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE', res);
        this.loadProducts();
      },
      error => {
        console.log('ERROR', error);
      }
    );
  }

  onUpdateProduct(): void {
    this.productSubsUpdate = this.productService.updateProduct({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }, this.editId).subscribe(
      res => {
        console.log('RES UPDATE', res);
        this.loadProducts();
      },
      error => {
        console.log('ERROR UPDATE', error);
      }
    );
  }

  onEdit(product: any): void{
    console.log(product);
    this.editId = product.id;
    this.productForm.patchValue(product);
    this.edit = true;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.productSubsAdd ? this.productSubsAdd.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.productSubsGet ? this.productSubsGet.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.productSubsDelete ? this.productSubsDelete.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.productSubsUpdate ? this.productSubsUpdate.unsubscribe() : '';

  }

  notEdit(): void{
    this.edit = false;
    this.editId = '';
    this.productForm.patchValue({
      description: '',
      imageUrl: '',
      price: '',
      title: ''
    });
  }

}
