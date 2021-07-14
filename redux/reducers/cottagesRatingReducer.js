import { createSlice } from "@reduxjs/toolkit";
import cottages from "../initData/cottagesRatingCards";

const initialState = {
  data: cottages,
  error: "",
  loading: false,
};
const cottagesRatingSlice = createSlice({
  initialState,
  name: "cottagesRatingSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default cottagesRatingSlice.reducer;
