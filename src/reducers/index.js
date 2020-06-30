import {combineReducers} from 'redux';
import auth from '../pages/auth/reducers/Auth.reducer';
import movies from '../pages/movies-main/reducers/Movies.reducer';

const appReducer = combineReducers({
  auth,
  movies,
});

export default (state, action) => {
  return appReducer(state, action);
};
