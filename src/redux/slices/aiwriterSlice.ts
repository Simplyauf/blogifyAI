import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial authentication state
interface AIState {
  aiList: any;
  loadingAll: boolean;
  error: {} | null;
}

const initialAIState: AIState = {
  aiList: [],
  loadingAll: false,
  error: {},
};
const aiwriterSlice = createSlice({
  name: "ai_List",
  initialState: initialAIState,
  reducers: {
    // login: (state, action: PayloadAction<string>) => {
    //   state.isAuthenticated = true;
    //   state.accessToken = action.payload;
    // },
    // logout: (state) => {
    //   state.isAuthenticated = false;
    //   state.accessToken = null;
    // },
    aiListStart(state) {
      state.loadingAll = true;
      state.error = null;
    },
    aiListStartSuccess: (state, action) => {
      state.loadingAll = false;
      state.error = null;
      state.aiList = action.payload;
    },
    aiListStartFailure(state, action) {
      state.loadingAll = false;
      state.error = action.payload.error;
      state.aiList = null;
    },
  },
});
export const { aiListStart, aiListStartSuccess, aiListStartFailure } =
  aiwriterSlice.actions;
export default aiwriterSlice.reducer;
