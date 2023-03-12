import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  AnyAction,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

// children reducers
import linksReducer from './links';

const rootReducer = combineReducers({
  links: linksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

// 如果以非 Redux Toolkit 的方式，使用 thunk 時 typescript 會無法推導型別，因此需要重新封裝一個 useTypedDispatch
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export default store;
