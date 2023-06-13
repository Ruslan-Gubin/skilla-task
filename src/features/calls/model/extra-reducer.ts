import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getRecordThunk } from "./thunk";
import { CallsFearuresInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<CallsFearuresInitState>
) => {
  builder
    .addCase(getRecordThunk.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    .addCase(getRecordThunk.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      }
    })
    .addCase(getRecordThunk.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      const id = action.payload.record_id;
      state.records[id] = action.payload.audio;
    });
};
