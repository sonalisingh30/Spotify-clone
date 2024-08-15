import { configureStore } from "@reduxjs/toolkit";
import apdiDataReducer from "./components/data/apiDataSlice";

export default configureStore({
  reducer: {
    apiData: apdiDataReducer,
  },
});
