 

 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUser,loginUser } from "../../services/axiosInstances";

export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await registerUser(userData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration Failed"
      );
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await loginUser(userData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login Failed"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
     token: localStorage.getItem("token") ||null,
    loading: false,
    error: null,
  },

  reducers: {
      logout: (state) => {
    state.user = null;
    state.token = null;
    state.error = null;

    localStorage.removeItem("token");
  },
  },

  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state) => {
        state.loading = true;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })

      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
  state.loading = true;
})

.addCase(login.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload.user;
   state.token = action.payload.token;

  localStorage.setItem("token", action.payload.token);
})

.addCase(login.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;