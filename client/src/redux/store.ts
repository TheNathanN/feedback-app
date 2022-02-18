import { configureStore } from '@reduxjs/toolkit';
import sorterReducer from './slices/sorterSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    sorter: sorterReducer,
    filter: filterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
