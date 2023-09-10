import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Import the storage engine of your choice
import configSlice from "./configSlice";
import gptSlice from "./gptSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

// Define a persistConfig to specify how and where to persist the state
const persistConfig = {
  key: "root", // Root key in local storage
  storage, // Use the imported storage engine
  // You can add other configuration options here, such as blacklist or whitelist
};

// Wrap your reducers with the persistReducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  })
);

// Create the Redux store with the persisted reducer
const appStore = configureStore({
  reducer: persistedReducer,
});

// Create a persistor object to persist the store
const persistor = persistStore(appStore);

export { appStore, persistor };
