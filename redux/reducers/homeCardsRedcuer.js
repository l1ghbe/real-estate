import { createSlice } from "@reduxjs/toolkit";
import homeData from "../initData/homeCards";

const initialState = {
  data: homeData,
  error: "",
  loading: false,
};
const homeCardsSlice = createSlice({
  initialState,
  name: "homeCardsSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default homeCardsSlice.reducer;
