import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AnimalService} from '../shared/services/animal.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [AdminComponent, CardComponent, HeaderComponent, FormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AnimalService
  ]
})
export class AdminModule { }
