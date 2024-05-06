import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
