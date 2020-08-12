import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaComponent } from './Components/personaComp/persona.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonaComponent
  ],
  exports: [
    PersonaComponent
  ]
})
export class PersonaModule { }