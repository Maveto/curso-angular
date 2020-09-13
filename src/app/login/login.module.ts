import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {NgElseDirective} from '../directives/ng-else.directive';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from '../services/auth.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
