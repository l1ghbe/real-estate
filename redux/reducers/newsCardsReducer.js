import { createSlice } from "@reduxjs/toolkit";
import newsData from "./../initData/newsData"

const initialState = {
  data: newsData,
  error: "",
  loading: false,
};
const newsCardsSlice = createSlice({
  initialState,
  name: "newsSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default newsCardsSlice.reducer;
