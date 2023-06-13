import { PayloadAction } from "@reduxjs/toolkit";
import { CallsFearuresInitState } from "./types";

export const reducers = {
  setSortDateCalls(
    state: CallsFearuresInitState,
    action: PayloadAction<string>
  ) {
    state.startDate = action.payload;
  },

  setInOutFilter(
    state: CallsFearuresInitState,
    action: PayloadAction<number | string>
  ) {
    state.inOut = action.payload;
  },

  setFilterState(
    state: CallsFearuresInitState,
    action: PayloadAction<{ name: string; checkChange: boolean }>
  ) {
    state.filtersList[action.payload.name] = action.payload.checkChange;
  },

  cancelFilter(state: CallsFearuresInitState) {
    state.cancelFilterState = true;
    state.inOut = "";
  },

  setFilter(state: CallsFearuresInitState) {
    state.cancelFilterState = false;
  },
};
