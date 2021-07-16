import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientWizardComponent } from './client-wizard.component';
import { ConfigureClientComponent } from './step/2-configure-client/configure-client.component';
import { DefineRolesComponent } from './step/3-define-roles/define-roles.component';
import { ReviewClientComponent } from './step/4-review-client/review-client.component';
import { GetStartedComponent } from './step/1-get-started/get-started.component';

const routes: Routes = [
  { path: '', component: ClientWizardComponent,
    children: [
      {path: 'get-started', component: GetStartedComponent},
      {path: 'configure-client', component: ConfigureClientComponent},
      {path: 'define-roles', component: DefineRolesComponent},
      {path: 'review-client', component: ReviewClientComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientWizardRoutingModule { }
