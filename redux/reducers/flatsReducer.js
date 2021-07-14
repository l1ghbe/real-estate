import { createSlice } from "@reduxjs/toolkit";
import flatsData from "../initData/flatsData";

const initialState = {
  data: flatsData,
  error: "",
  loading: false,
};
const flatsSlice = createSlice({
  initialState,
  name: "flats",
  reducers: {
    // getHouses(state, action) {
    //   return state.filter((item) => item.type === action.payload);
    // },
  },
});
// export const { getHouses } = largeHousesSlice.actions;
export default flatsSlice.reducer;
