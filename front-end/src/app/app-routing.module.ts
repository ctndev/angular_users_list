import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent },
  {path: ':page', component: UsersComponent},
  {path: ':page/:gender', component: UsersComponent},
  {path: ':page/:gender/:state', component: UsersComponent},
  {path: ':page/:gender/:state/:search', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
