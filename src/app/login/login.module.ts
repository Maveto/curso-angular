import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {NgElseDirective} from '../directives/ng-else.directive';


@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule
  ]
})
export class LoginModule { }
