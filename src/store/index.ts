import { combineReducers, legacy_createStore as createStore } from 'redux';
import linksReducer from './links';

const rootReducer = combineReducers({
  links: linksReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
