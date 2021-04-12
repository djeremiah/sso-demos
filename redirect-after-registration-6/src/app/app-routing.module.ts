import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { StartComponent } from './start.component';

const routes: Routes = [
  {path: 'forms', loadChildren: './application-forms/application-forms.module#ApplicationFormsModule'},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
