import { createSlice } from "@reduxjs/toolkit";
import articleData from "../initData/articleData";

const initialState = {
  data: articleData,
  error: "",
  loading: false,
};
const articleCardsSlice = createSlice({
  initialState,
  name: "articleCardsSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default articleCardsSlice.reducer;
