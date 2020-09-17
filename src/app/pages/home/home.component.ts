import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddProduct} from './store/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  totalPrice = 0;
  products = [];
  cart = [];
  productSubs: Subscription;
  cartSubs: Subscription;

  constructor(private store: Store<any>, private productService: ProductService) { }

  ngOnInit(): void {

    this.cartSubs = this.store.select(s => s.home).subscribe(res => {
      this.cart = Object.assign([], res.items);
      this.totalPrice = 0;
      for (const p of this.cart){
        this.totalPrice += p.price;
      }
    });

    this.productSubs = this.productService.getProducts().subscribe(res => {
        Object.entries(res).map(p => this.products.push(p[1]));
      }
    );
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.productSubs ? this.productSubs.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.cartSubs ? this.cartSubs.unsubscribe() : '';
  }

  onComprar(productC: any): void {
    this.store.dispatch(AddProduct({product: productC}));
  }
}
