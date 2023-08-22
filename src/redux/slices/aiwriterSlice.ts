import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial authentication state
interface AIState {
  aiList: any;
  loadingAll: boolean;
  loadingSingle: boolean;
  errorSingle: string | null;
  aiListSingle: any;
  errorAiList: string | null;
}

const initialAIState: AIState = {
  aiList: [],
  loadingAll: false,
  loadingSingle: false,
  errorAiList: "",
  errorSingle: "",
  aiListSingle: {},
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
      state.errorAiList = null;
    },
    aiListStartSuccess: (state, action) => {
      state.loadingAll = false;
      state.errorAiList = null;
      state.aiList = action.payload;
    },
    aiListStartFailure(state, action) {
      state.loadingAll = false;
      state.errorAiList = action.payload;
      state.aiList = null;
    },
    aiSingleStart(state) {
      state.loadingSingle = true;
      state.errorSingle = null;
    },
    aiSingleStartSuccess: (state, action) => {
      state.loadingSingle = false;
      state.errorSingle = null;
      state.aiListSingle = action.payload;
    },
    aiSingleStartFailure(state, action) {
      state.loadingSingle = false;
      state.errorSingle = action.payload.error;
      state.aiListSingle = null;
    },
  },
});
export const {
  aiListStart,
  aiListStartSuccess,
  aiListStartFailure,
  aiSingleStart,
  aiSingleStartSuccess,
  aiSingleStartFailure,
} = aiwriterSlice.actions;
export default aiwriterSlice.reducer;
