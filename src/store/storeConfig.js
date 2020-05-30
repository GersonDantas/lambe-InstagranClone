import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/user';
import postsReducers from './reducers/posts';

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducers,
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
