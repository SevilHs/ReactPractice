import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../data/usersData";

export const usersSlice = createSlice({
  name: "users",
  initialState: usersData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.find((item) => item.id == id);
      user.name = name;
      user.email = email;
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id != action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
