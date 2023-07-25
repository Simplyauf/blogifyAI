import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial authentication state
interface AuthState {
  isAuthenticated: boolean;
  isEntireAppLoading: boolean;
  accessToken: string | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  isEntireAppLoading: true,
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
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setIsEntireAppLoader: (state, action: PayloadAction<boolean>) => {
      state.isEntireAppLoading = action.payload;
    },
  },
});
export const { login, logout, setIsAuthenticated, setIsEntireAppLoader } =
  authSlice.actions;
export default authSlice.reducer;
