import { Action } from '@ngrx/store';

import * as postActions from '../actions/post.actions';


export const PostReducer = (state = [], action: postActions.Action): any => {
    switch (action.type) {
        case postActions.LOAD_POSTS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
