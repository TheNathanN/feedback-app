import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CurrentUserState {
  value: {};
}

// Define the initial state using that type
const initialState: CurrentUserState = {
  value: {},
};

export const currentUserSlice = createSlice({
  name: 'currentUsers',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentUser: (state, action: PayloadAction<{}>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.currentUser.value;

export default currentUserSlice.reducer;
