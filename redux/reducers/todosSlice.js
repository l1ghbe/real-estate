import { createSlice } from "@reduxjs/toolkit";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const initialState = [
  { id: random(1,100), text: "prosn" },
  { id: random(1,100), text: "zavtr" },
];

const todosSlice = createSlice({
  initialState,
  name: "todoList",
  reducers: {
    addSliceTodo(state, action) {
      state.push({ id: random(1,100), text: action.payload });
    },
    removeSliceTodo(state, action) {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});
export const { addSliceTodo, removeSliceTodo } = todosSlice.actions;
export default todosSlice.reducer;
