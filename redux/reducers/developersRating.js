import { createSlice } from "@reduxjs/toolkit";
import developersData from "../initData/developersData";

const initialState = {
  data: developersData,
  error: "",
  loading: false,
};

const developerRatingCardsSlice = createSlice({
  initialState,
  name: "developerCards",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default developerRatingCardsSlice.reducer;
