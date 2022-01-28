import { AppState, AppDispatch } from './typedef';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
