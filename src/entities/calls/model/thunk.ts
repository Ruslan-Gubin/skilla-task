import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCalls } from "../api";
import { ReqAllCalls, ResAllCalls } from "./types";

export const getAllCallsThunk = createAsyncThunk<
  ResAllCalls,
  ReqAllCalls,
  { rejectValue: string }
>("calls/getAllCallsThunk", async (options, { rejectWithValue }) => {
  const { endDate, inOut, limit, startDate } = options;

  const response = await getCalls({ endDate, inOut, limit, startDate });

  if (response.status !== 200) {
    return rejectWithValue("Error all calls");
  }

  const { total_rows, results } = response.data;

  return { total_rows, results };
});
