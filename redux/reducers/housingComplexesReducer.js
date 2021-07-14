import { createSlice } from "@reduxjs/toolkit";
import housingComplexesData from "../initData/housingComplexes";

const initialState = {
  data: housingComplexesData,
  error: "",
  loading: false,
};
const singleHousingComplexesSlice = createSlice({
  initialState,
  name:"housingComplexes",
  reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default singleHousingComplexesSlice.reducer;
