import { User } from '../../../api/model/user';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';

export class LoadPostsAction {
    readonly type = LOAD_POSTS;
    constructor() {
    }
}

export class LoadPostsSuccessAction {
    readonly type = LOAD_POSTS_SUCCESS;
    constructor(public payload: User[]) {
    }
}

export type Action = LoadPostsAction | LoadPostsSuccessAction;
