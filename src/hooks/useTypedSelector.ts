// 建立 custom hook 以便 typescript 順利推導 redux 的型別
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
