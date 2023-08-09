import { createSlice } from "@reduxjs/toolkit";
import { todosData } from "../data/todosData";

export const todosSlice = createSlice({
  name: "todos",
  initialState: todosData,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) => {
      const editedTodo=state.find(todo=>todo.id==action.payload.id)
      editedTodo.title=action.payload.title
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    checkedTode :(state,action)=>{
        const selectedTodo=state.find(todo=>todo.id==action.payload.id);
        selectedTodo.checked= selectedTodo.checked ? false : true
        console.log(action.payload);
    }
  },
});

export const { addTodo, updateTodo, deleteTodo , checkedTode } = todosSlice.actions;

export default todosSlice.reducer;
