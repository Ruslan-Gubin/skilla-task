import { useAppDispatch, useAppSelector } from "../../../shared";
import { callsFeaturesSlice } from "./slice";
import { getRecordThunk } from "./thunk";
import { ReqRecordPartner } from "./types";

const select = (state: RootState) => state.callsFeatures;
const action = callsFeaturesSlice.actions;
export const callsFeaturesReducer = callsFeaturesSlice.reducer;

export const useCallsFeatures = () => {
  return useAppSelector(select);
};

export const useCallsFeaturesAction = () => {
  const dispatch = useAppDispatch();

  return {
    setFilter: () => dispatch(action.setFilter()),
    cancelFilter: () => dispatch(action.cancelFilter()),
    setFilterState: (name: string, checkChange: boolean) =>
      dispatch(action.setFilterState({ name, checkChange })),
    setInOutFilter: (params: number | string) =>
      dispatch(action.setInOutFilter(params)),
    setStartDate: (dateStr: string) =>
      dispatch(action.setSortDateCalls(dateStr)),
    getRecord: (params: ReqRecordPartner) => dispatch(getRecordThunk(params)),
  };
};
