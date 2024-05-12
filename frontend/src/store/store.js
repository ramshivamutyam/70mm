import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/watchlist/watchlistSlice";
import authenticationReducer from "../features/authentication/authenticationSlice";

const store = configureStore({
  reducer: {
    watchlist:watchlistReducer,
    auth:authenticationReducer,
  },
});

export default store;