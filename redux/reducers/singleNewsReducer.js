import { createSlice } from "@reduxjs/toolkit";
import singleNews from "../initData/singleNews";

const initialState = {
  data: singleNews,
  error: "",
  loading: false,
};
const singleNewsSlice = createSlice({
  initialState,
  name: "singleNewsSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default singleNewsSlice.reducer;
