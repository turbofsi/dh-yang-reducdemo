import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserService } from '../api/api/users.service';

const path: Routes = [
  {path: 'users', component: UsersComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(path)
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
