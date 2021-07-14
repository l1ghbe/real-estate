import { createSlice } from "@reduxjs/toolkit";
import readAlsoNews from "../initData/readAlsoNews";

const initialState = {
  data: readAlsoNews,
  error: "",
  loading: false,
};
const readAlsoNewsSlice = createSlice({
  initialState,
  name: "popularRequestsSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default readAlsoNewsSlice.reducer;
