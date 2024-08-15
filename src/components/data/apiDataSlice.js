import { createSlice } from "@reduxjs/toolkit";
export const apiDataSlice = createSlice({
  name: "counter",
  initialState: {
    data: {},
  },
  reducers: {
    updateApiData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateApiData } = apiDataSlice.actions;

export default apiDataSlice.reducer;
