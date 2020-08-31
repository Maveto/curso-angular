import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {NgElseDirective} from '../directives/ng-else.directive';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatButtonModule,
        FormsModule
    ]
})
export class LoginModule { }
