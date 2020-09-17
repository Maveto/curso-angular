import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AnimalService} from '../shared/services/animal.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../shared/services/auth.service';
import {Store} from '@ngrx/store';
import {AddAnimal, EmptyStore} from './store/admin.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {


  report = false;
  opened = false;
  animalForm: FormGroup;
  perritos = [];
  vacinated = [];
  notVaccinated = [];
  animalSubsGet: Subscription;
  animalSubsDelete: Subscription;
  animalSubsUpdate: Subscription;
  editId: any;
  pre = [];

  edit: boolean;

  constructor(private formBuilder: FormBuilder, private animalService: AnimalService, private authService: AuthService,
              private store: Store<any>) { }

  ngOnInit(): void {
    this.edit = false;

    this.loadProducts();

    this.animalForm = this.formBuilder.group({
      age: '',
      color: '',
      name: ['', [Validators.required, Validators.minLength(3)]],
      urlImage: '',
      vaccinated: ['', [Validators.required]]
    });
  }

  loadProducts(): void{
    this.pre = this.perritos;
    this.perritos = [];
    this.animalSubsGet = this.animalService.getAnimal().subscribe(res => {
        Object.entries(res).map((p: any) => this.perritos.push({id: p[0], ...p[1]}));
        this.vacinated = this.perritos.filter((p: any) => p.vaccinated === true || p.vaccinated === 'true');
        this.notVaccinated = this.perritos.filter((p: any) => !p.vaccinated || p.vaccinated === 'false');

        this.store.dispatch(EmptyStore());
        for (const p of this.perritos){
          this.store.dispatch(AddAnimal({animal: p}));
        }
      }
    );
    this.opened = false;
  }



  onDelete(id: any): void{
    this.animalSubsDelete = this.animalService.deleteAnimal(id).subscribe(
      res => {
        this.loadProducts();
      },
      error => {
        console.log('ERROR', error);
      }
    );
  }

  onUpdateProduct(): void {
    this.animalSubsUpdate = this.animalService.updateAnimal({
      ...this.animalForm.value,
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

  onEdit(animal: any): void{
    this.editId = animal.id;
    this.animalForm.patchValue(animal);
    this.edit = true;
    this.opened = !this.opened;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.animalSubsGet ? this.animalSubsGet.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.animalSubsDelete ? this.animalSubsDelete.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.animalSubsUpdate ? this.animalSubsUpdate.unsubscribe() : '';

  }

  notEdit(): void{
    this.edit = false;
    this.editId = '';
    this.animalForm.patchValue({
      age: '',
      color: '',
      name: '',
      urlImage: '',
      vaccinated: ''
    });
  }
}
