import { combineReducers } from 'redux';
import PostReducer from './PostsReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
    posts: PostReducer,
    users: UsersReducer
});