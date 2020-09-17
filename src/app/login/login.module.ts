import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ]
})
export class LoginModule { }
