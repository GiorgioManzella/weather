import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../slice/locationSlice";

export default configureStore({
  reducer: {
    location: locationReducer,
  },
});
