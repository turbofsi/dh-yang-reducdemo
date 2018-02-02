import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { UserService } from '../api/api/users.service';
import { User } from '../api/model/user';
import { AppState } from '../core/store/AppState';
import * as PostActions from '../core/store/actions/post.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  userPostList: User[];
  errorMessage: string;
  posts$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(state => state.posts);
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.store.dispatch(new PostActions.LoadPostsAction());
  }

}
