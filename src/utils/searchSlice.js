import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {}, //to store cache
  reducers: {
    addToCache: (state, action) => {
      // {"ip":["iphone,iphone12"]}
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addToCache } = searchSlice.actions;
export default searchSlice.reducer;
