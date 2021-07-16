import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientWizardRoutingModule } from './client-wizard-routing.module';
import { ClientWizardComponent } from './client-wizard.component';
import { WizardService } from './wizard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigureClientComponent } from './step/2-configure-client/configure-client.component';
import { DefineRolesComponent } from './step/3-define-roles/define-roles.component';
import { RoleBadgeComponent } from './step/3-define-roles/role-badge.component';
import { ReviewClientComponent } from './step/4-review-client/review-client.component';
import { GetStartedComponent } from './step/1-get-started/get-started.component';


@NgModule({
  declarations: [
    ClientWizardComponent,
    GetStartedComponent,
    ConfigureClientComponent,
    DefineRolesComponent,
    RoleBadgeComponent,
    ReviewClientComponent
  ],
  imports: [
    CommonModule,
    ClientWizardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WizardService]
})
export class ClientWizardModule { }
