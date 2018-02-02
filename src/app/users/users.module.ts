import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserService } from '../api/api/users.service';

const path: Routes = [
  {path: '', component: UsersComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(path)
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
  ]
})
export class UsersModule { }
