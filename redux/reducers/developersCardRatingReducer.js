import { createSlice } from "@reduxjs/toolkit";
import developersCardRating from "../initData/developersCardRating";

const initialState = {
    data: developersCardRating,
    error: "",
    loading: false,
};

const developerCardRatingSlice = createSlice({
    initialState,
    name: "developersCardRating",
    reducers: {},
});
// export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default developerCardRatingSlice.reducer;
