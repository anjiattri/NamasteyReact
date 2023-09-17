import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { cacheResult } = searchSlice.actions;
