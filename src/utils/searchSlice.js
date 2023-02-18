import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    // searchQuery: ["searchResult 1", ...]
  },
  reducers: {
    cacheResults: (state, action) => {
      console.log(action.payload);
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
