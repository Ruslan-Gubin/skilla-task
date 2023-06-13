import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRecordPartner } from "../api/record-api";
import { ReqRecordPartner } from "./types";

export const getRecordThunk = createAsyncThunk<
  { audio: string; record_id: string },
  ReqRecordPartner,
  { rejectValue: string }
>("calls/getRecordThunk", async (options, { rejectWithValue }) => {
  const { partner_id, record_id } = options;

  const response = await getRecordPartner({ partner_id, record_id });

  const recordBlob = await response.blob();
  const recordSrc = URL.createObjectURL(recordBlob);

  if (response.status !== 200) {
    return rejectWithValue("Error audio");
  }

  return { audio: recordSrc, record_id };
});
