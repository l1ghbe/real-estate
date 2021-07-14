import { createSlice } from "@reduxjs/toolkit";
import instagramData from "../initData/instagramData";

const initialState = {
  data: instagramData,
  error: "",
  loading: false,
};
const instagramPostsSlice = createSlice({
  initialState,
  name: "instagramPosts",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default instagramPostsSlice.reducer;
