import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getAllCallsThunk } from "./thunk";
import { CallsInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<CallsInitState>
) => {
  builder
    .addCase(getAllCallsThunk.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    .addCase(getAllCallsThunk.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      }
    })
    .addCase(getAllCallsThunk.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.calls = action.payload.results;
      state.total_rows = action.payload.total_rows;
    });
};
