import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Us1Component } from './Components/us1/us1.component';
import { Us2Component } from './Components/us2/us2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Us1Component,
    Us2Component
  ],
  exports: [
    Us1Component,
    Us2Component
  ]
})
export class UserModule { }