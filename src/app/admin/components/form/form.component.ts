import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AnimalService} from '../../../shared/services/animal.service';
import {AuthService} from '../../../shared/services/auth.service';
import {AdminComponent} from '../../admin.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit, OnDestroy {

  @Input() animalForm: FormGroup;

  @Input() edit: boolean;

  animalSubsAdd: Subscription;

  constructor(private animalService: AnimalService, private authService: AuthService, private adminComponent: AdminComponent) { }

  ngOnInit(): void {
  }

  onEnviar(): void {
    this.animalSubsAdd = this.animalService.addAnimal({
      ...this.animalForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        this.adminComponent.loadProducts();
      },
      error => {
        console.log('ERROR DE SERRVIDOR', error);
      }
    );
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.animalSubsAdd ? this.animalSubsAdd.unsubscribe() : '';
  }

  onUpdateProduct(): void {
    this.adminComponent.onUpdateProduct();
  }

}
