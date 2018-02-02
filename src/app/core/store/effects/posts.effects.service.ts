import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { UserService } from '../../../api/api/users.service';
import * as PostActions from '../actions/post.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class PostEffects {

constructor(
    private userService: UserService,
    private actions$: Actions) { }

@Effect() loadPosts$ = this.actions$
    .ofType(PostActions.LOAD_POSTS)
    .switchMap(() => this.userService.getPosts())
    .map(posts => (new PostActions.LoadPostsSuccessAction(posts)));
}

