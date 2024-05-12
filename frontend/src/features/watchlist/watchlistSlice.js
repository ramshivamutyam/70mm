import { createSlice } from "@reduxjs/toolkit";
//nanoid
const initialState = {
  watchlists: [],
};
export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      const item = action.payload;
      const found = state.watchlists.find((obj) => {
        return obj.id === item.id;
      });
      if (found === undefined) {
        state.watchlists.push(item);
      } else {
        alert("Item already exists in wishlist");
      }
    },
    removeFromWatchList: (state, action) => {
      state.watchlists = state.watchlists.filter((item) => {
        return item.id !== action.payload;
      });
    },
    clearWatchList:(state)=>{
      state.watchlists =[];
    }
  },
});

export const { addToWatchList, removeFromWatchList,clearWatchList} = watchlistSlice.actions;
export default watchlistSlice.reducer;
