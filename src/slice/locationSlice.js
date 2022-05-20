import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    city: "",
  },
  reducers: {
    search: (state, action) => {
      return {
        ...state,
        location: [...state.content, action.payload],
      };
    },
  },
});

export default locationSlice.reducer;
export const search = locationSlice.aciton;
