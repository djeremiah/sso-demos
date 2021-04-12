import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationFormsRoutingModule } from './application-forms-routing.module';
import { FormListComponent } from './form-list.component';
import { ApplicationFormComponent } from './application-form.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationFormsRoutingModule
  ],
  declarations: [
    ApplicationFormComponent,
    FormListComponent
  ]
})
export class ApplicationFormsModule { }
