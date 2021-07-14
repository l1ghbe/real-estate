import { createSlice } from "@reduxjs/toolkit";
import developersNewsData from "../initData/developersNewsData";

const initialState = {
  data: developersNewsData,
  error: "",
  loading: false,
};

const developersNewsSlice = createSlice({
  initialState,
  name: "developersNews",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default developersNewsSlice.reducer;
