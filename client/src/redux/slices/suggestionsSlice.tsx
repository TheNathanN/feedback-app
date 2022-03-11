import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface SuggestionsState {
  value: [];
}

// Create thunk
const fetchAllSuggestions = createAsyncThunk(
  'suggestions/fetchAllSuggestions',
  async thunkApi => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/feedback`);
    const data = await response.json();
    return data;
  }
);

// Define the initial state using that type
const initialState: SuggestionsState = {
  value: [],
};

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSuggestions: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setSuggestions } = suggestionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.suggestions.value;

export default suggestionsSlice.reducer;
