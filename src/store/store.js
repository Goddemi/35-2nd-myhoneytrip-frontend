import { configureStore, createSlice } from '@reduxjs/toolkit';

const pattern = createSlice({
  name: 'pattern',
  initialState: false,
  reducers: {
    changePattern(state) {
      return !state;
    },
  },
});

export let { changePattern } = pattern.actions;

export default { configureStore }({
  reducer: { pattern: pattern.reducer },
});
