import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationFormComponent } from './application-form.component';
import { FormListComponent } from './form-list.component';

const routes: Routes = [

  {path: 'new', component: ApplicationFormComponent},
  {path: ':id', component: ApplicationFormComponent},
  {path: '', component: FormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationFormsRoutingModule { }
