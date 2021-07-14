import { createSlice } from "@reduxjs/toolkit";
import popularRequest from "../initData/popularRequests";

const initialState = {
  data: popularRequest,
  error: "",
  loading: false,
};
const popularRequestsSlice = createSlice({
  initialState,
  name: "popularRequestsSlice",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default popularRequestsSlice.reducer;
