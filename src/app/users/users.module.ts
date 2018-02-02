import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserService } from '../api/api/users.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';

const path: Routes = [
  {path: '', component: UsersComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(path)
  ],
  declarations: [
    UsersComponent,
    PostDetailComponent,
    PostListComponent
],
  providers: [
  ]
})
export class UsersModule { }
