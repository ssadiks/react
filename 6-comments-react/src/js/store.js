import { createStore } from 'redux';
import reducers from './reducers/posts';

const store = createStore(reducers);
export default store;