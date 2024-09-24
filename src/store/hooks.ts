// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from './store';


export const useAppDispatch = (): AppDispatch => {
  return useDispatch<AppDispatch>();
}
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();