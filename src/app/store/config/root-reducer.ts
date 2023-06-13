import { combineReducers } from "@reduxjs/toolkit";
import { callsReducer } from "../../../entities";
import { callsFeaturesReducer } from "../../../features";

export const rootReducer = combineReducers({
  calls: callsReducer,
  callsFeatures: callsFeaturesReducer,
});
