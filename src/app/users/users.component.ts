import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { UserService } from '../api/api/users.service';
import { User } from '../api/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  userPostList: User[];
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPosts().subscribe(
      (users: User[]) => this.onUserListRetrived(users),
      (error: any) => this.errorMessage = <any>error
    );

  }

  onUserListRetrived(userPostList: User[]): void {
    this.userPostList = userPostList;
  }

}
