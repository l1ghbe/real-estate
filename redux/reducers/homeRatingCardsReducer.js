import { createSlice } from "@reduxjs/toolkit";
import homeData from "../initData/homeRatingCards";

const initialState = {
  data: homeData,
  error: "",
  loading: false,
};
const homeRatingCardsSlice = createSlice({
  initialState,
  name: "homeCardsSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default homeRatingCardsSlice.reducer;
