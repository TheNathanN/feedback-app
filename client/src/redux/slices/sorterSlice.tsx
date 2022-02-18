import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface SorterState {
  value: string;
}

// Define the initial state using that type
const initialState: SorterState = {
  value: 'Most Upvotes',
};

export const sorterSlice = createSlice({
  name: 'sorter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeSorter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeSorter } = sorterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sorter.value;

export default sorterSlice.reducer;
