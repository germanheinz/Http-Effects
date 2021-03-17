import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [UsersComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [ UsersComponent, ListComponent ]
})
export class UsersModule { }
