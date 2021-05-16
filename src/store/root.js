import { combineReducers } from 'redux';
import { authReducer, movieListReducer } from './reducers';

export const rootReducer = combineReducers({
    auth: authReducer,
    favorite: movieListReducer
});
