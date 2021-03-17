import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'user/:id', component: UsersComponent },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
