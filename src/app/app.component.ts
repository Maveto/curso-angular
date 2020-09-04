import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MascotServiceService} from './services/mascot-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  edit: boolean;
  masForm: FormGroup;
  mascotas = [];
  editId: any;

  mSubGet: Subscription;
  mSubPost: Subscription;
  mSubDelete: Subscription;
  mSubPut: Subscription;


  constructor(private mascotService: MascotServiceService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.edit = false;

    this.loadCards();

    this.masForm = this.formBuilder.group({
      age: '',
      color: '',
      name: ['', [Validators.required, Validators.minLength(3)]],
      urlImage: '',
      vaccinated: ['', [Validators.required]]
    });
  }

  loadCards(): void{
    this.mascotas = [];
    this.mSubGet = this.mascotService.getMascotas().subscribe(res => {
      Object.entries(res).map((p: any) => this.mascotas.push({id: p[0], ...p[1]}));
    });
  }

  onCreate(): void{
    console.log(this.masForm.value);
    this.mSubPost = this.mascotService.addMascota(this.masForm.value).subscribe(
      res => {
        console.log('ADD RES', res);
        this.loadCards();
      },
      error => {
        console.log('ADD ERROR', error);
      }
    );
  }

  onDelete(id: any): void{
    this.mSubDelete = this.mascotService.deleteMascota(id).subscribe(
      res => {
        console.log('DELETE RES', res);
        this.loadCards();
      },
      error => {
        console.log('DELETE ERROR', error);
      }
    );
  }

  onEdit(mascota: any): void{
    this.editId = mascota.id;
    this.masForm.patchValue(mascota);
    this.edit = true;
  }

  onUpdateMascota(): void{
    this.mSubPut = this.mascotService.updateMascota(this.editId, this.masForm.value).subscribe(
      res => {
        console.log('UPDATE RES', res);
        this.loadCards();
      },
      error => {
        console.log('UPDATE ERROR', error);
      }
    );
  }

  ngOnDestroy(): void{
    // tslint:disable-next-line:no-unused-expression
    this.mSubGet ? this.mSubGet.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.mSubPost ? this.mSubPost.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.mSubDelete ? this.mSubDelete.unsubscribe() : '';
    // tslint:disable-next-line:no-unused-expression
    this.mSubPut ? this.mSubPut.unsubscribe() : '';
  }

  notEdit(): void{
    this.edit = false;
    this.editId = '';

    this.masForm.patchValue({
      age: '',
      color: '',
      name: '',
      urlImage: '',
      vaccinated: ''
    });
  }

}
