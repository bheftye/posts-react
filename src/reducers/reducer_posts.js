/**
 * Created by bheftye on 12/07/17.
 */
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POST:
            const post = action.payload.data;
            return {...state, [post.id]: post};
            break;
        case FETCH_POSTS:
            //posts -> [post1, post2]
            //posts -> [1: post1, 36: post2]
            return _.mapKeys(action.payload.data, 'id');
            break;
        case DELETE_POST:
            const {id} = action.payload;
            return _.omit(state, id);
            break;
        default:
            return state;
    }
}