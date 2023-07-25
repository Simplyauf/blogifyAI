import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial authentication state
interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
