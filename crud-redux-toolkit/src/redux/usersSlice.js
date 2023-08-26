import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { usersData } from "../data/usersData";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getData = createAsyncThunk("getData", async () => {
  const res = await axios("https://northwind.vercel.app/api/customers");
  return res.data;
});

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  await axios.delete(`https://northwind.vercel.app/api/customers/${id}`);
  return id;
});

export const addUser = createAsyncThunk("addUser", async (newUser) => {
  await axios.post("https://northwind.vercel.app/api/customers", newUser);
});

export const updateUser = createAsyncThunk(
  "updateUser",
  async (updatedUser) => {
    await axios.patch(
      `https://northwind.vercel.app/api/customers/${updatedUser.id}`,
      updatedUser
    );
    return updatedUser;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // reducers: {
  //   addUser: (state, action) => {
  //     state.push(action.payload);
  //   },
  //   updateUser: (state, action) => {
  //     const { id, name, email } = action.payload;
  //     const user = state.find((item) => item.id == id);
  //     user.name = name;
  //     user.email = email;
  //   },
  //   deleteUser: (state, action) => {
  //     return state.filter((user) => user.id != action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.error = "Data not found";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.data = state.data.map((item) =>
        item.id == action.payload.id ? action.payload : null
      );
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload);
    });
  },
});

// export const { addUser, updateUser,deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
