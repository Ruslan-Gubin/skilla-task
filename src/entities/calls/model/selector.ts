import { useAppDispatch, useAppSelector } from "../../../shared";
import { callsSlice } from "./slice";
import { getAllCallsThunk } from "./thunk";
import { ReqAllCalls } from "./types";

const select = (state: RootState) => state.calls;
export const callsReducer = callsSlice.reducer;

export const useCalls = () => {
  return useAppSelector(select);
};

export const useCallsAction = () => {
  const dispatch = useAppDispatch();

  return {
    getAllCalls: (params: ReqAllCalls) => dispatch(getAllCallsThunk(params)),
  };
};
