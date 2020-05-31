import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import userReducer from './reducers/user';
import postsReducers from './reducers/posts';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducers,
});

const storeConfig = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)));
};

export default storeConfig;
