import { createSlice } from "@reduxjs/toolkit";
import buildingsData from "../initData/buildingsData";

const initialState = {
    data: buildingsData,
    error: "",
    loading: false,
};
const buildingsSlice = createSlice({
    initialState,
    name: "buildings",
    reducers: {
        // getHouses(state, action) {
        //   return state.filter((item) => item.type === action.payload);
        // },
    },
});
// export const { getHouses } = largeHousesSlice.actions;
export default buildingsSlice.reducer;
