import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface FilterState {
  value: string;
}

// Define the initial state using that type
const initialState: FilterState = {
  value: 'All',
};

export const filterSlice = createSlice({
  name: 'filter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.filter.value;

export default filterSlice.reducer;
