import { createSlice } from "@reduxjs/toolkit";
import singleArticle from "../initData/singleArticle";

const initialState = {
  data: singleArticle,
  error: "",
  loading: false,
};
const singleArticleSlice = createSlice({
  initialState,
  name: "singleArticleSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default singleArticleSlice.reducer;
