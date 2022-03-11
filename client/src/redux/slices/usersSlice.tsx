import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface UsersState {
  value: [];
}

// Define the initial state using that type
const initialState: UsersState = {
  value: [],
};

export const usersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUsers: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.users.value;

export default usersSlice.reducer;
