import { createSlice } from "@reduxjs/toolkit";
import readAlsoArticles from "../initData/readAsloArticles";

const initialState = {
  data: readAlsoArticles,
  error: "",
  loading: false,
};
const readAlsoArticlesSlice = createSlice({
  initialState,
  name: "readAlsoArticlesSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default readAlsoArticlesSlice.reducer;
