import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'application/new', loadChildren: () => import('./client-wizard/client-wizard.module').then(m => m.ClientWizardModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
