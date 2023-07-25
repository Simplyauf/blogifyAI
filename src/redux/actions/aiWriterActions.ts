import http from "@/src/utils/httpReques";
import {
  aiListStart,
  aiListStartFailure,
  aiListStartSuccess,
  aiSingleStart,
} from "../slices/aiwriterSlice";

export const fetchAiWriters = () => async (dispatch: any) => {
  try {
    dispatch(aiListStart());
    const response = await http().get("dashboard/user/blogifyai", {});
    console.log(response);
    dispatch(aiListStartSuccess({ aiList: response?.data.data }));
  } catch (error) {
    console.log(error);
    dispatch(aiListStartFailure({ error }));
  }
};
export const fetchAiWriter = () => async (dispatch: any) => {
  try {
    dispatch(aiSingleStart());
    const response = await http().get("dashboard/user/blogifyai", {});
    console.log(response);
    dispatch(aiListStartSuccess({ aiList: response?.data.data }));
  } catch (error) {
    console.log(error);
    dispatch(aiListStartFailure({ error }));
  }
};
