import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LanguageReducer from '../reducers/LanguageReducer';
import ModeReducer from '../reducers/ModeReducer';

export const store = configureStore({
  reducer: {
    mode: ModeReducer,
    language: LanguageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
