import { createSlice } from "@reduxjs/toolkit";
import singleDeveloper from "../initData/singleDeveloper";

const initialState = {
  data: singleDeveloper,
  error: "",
  loading: false,
};
const singleDeveloperSlice = createSlice({
  initialState,
  name: "singleDeveloperSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default singleDeveloperSlice.reducer;
