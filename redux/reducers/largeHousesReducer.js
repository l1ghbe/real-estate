import { createSlice } from "@reduxjs/toolkit";
import largeHouses from "../initData/largeHouses";

const initialState = {
  data: largeHouses,
  error: "",
  loading: false,
};
const largeHousesSlice = createSlice({
  initialState,
  name: "largeHouses",
  reducers: {
    // getHouses(state, action) {
    //   return state.filter((item) => item.type === action.payload);
    // },
  },
});
// export const { getHouses } = largeHousesSlice.actions;
export default largeHousesSlice.reducer;
