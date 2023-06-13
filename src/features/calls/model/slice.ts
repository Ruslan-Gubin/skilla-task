import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from "./extra-reducer";

export const callsFeaturesSlice = createSlice({
  name: "callsFeatures",
  initialState,
  reducers,
  extraReducers,
});
