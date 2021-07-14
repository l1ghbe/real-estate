import { createSlice } from "@reduxjs/toolkit";
import singleDevDescription from "../initData/singleDevDescription";

const initialState = {
    data: singleDevDescription,
    error: "",
    loading: false,
};
const singleDevDescriptionSlice = createSlice({
    initialState,
    name: "singleDevDescriptionSlice",
    reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default singleDevDescriptionSlice.reducer;
