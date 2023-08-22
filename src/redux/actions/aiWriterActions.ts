import http from "@/src/utils/httpReques";
import {
  aiListStart,
  aiListStartFailure,
  aiListStartSuccess,
  aiSingleStart,
  aiSingleStartFailure,
  aiSingleStartSuccess,
} from "../slices/aiwriterSlice";

export const fetchAiWriters = () => async (dispatch: any) => {
  try {
    dispatch(aiListStart());
    const response = await http().get("dashboard/user/blogifyai", {});
    console.log(response);
    dispatch(aiListStartSuccess({ aiList: response?.data.data }));
  } catch (error: any) {
    console.log(error);
    error = error.response?.data.message || error.message;
    dispatch(aiListStartFailure(error));
  }
};
export const fetchAiWriter =
  (slug: string | string[] | undefined) => async (dispatch: any) => {
    try {
      dispatch(aiSingleStart());
      const response = await http().get(
        `dashboard/user/blogifyai/generator/${slug}`,
        {}
      );
      console.log(response.data.data);
      dispatch(aiSingleStartSuccess({ aiListSingle: response?.data.data }));
    } catch (error: any) {
      console.log(error);
      error = error.response?.data.message || error.message;
      dispatch(aiSingleStartFailure(error));
    }
  };
