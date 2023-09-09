import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});
export default appStore;
