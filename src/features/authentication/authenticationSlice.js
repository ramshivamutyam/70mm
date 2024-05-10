import { createSlice } from "@reduxjs/toolkit";
//nanoid
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    status:false,
    userData:null,
  },
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData =null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
