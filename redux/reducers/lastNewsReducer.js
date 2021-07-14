import { createSlice } from "@reduxjs/toolkit";
import lastNews from "../initData/lastNewsData";
const initialState = {
  data: lastNews,
  error: "",
  loading: false,
};

const lastNewsSlice = createSlice({
  initialState,
  name: "lastNews",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default lastNewsSlice.reducer;
