import { getDate } from "../libs/helpers/getSrartDate";
import { CallsFearuresInitState } from "./types";

const initialState: CallsFearuresInitState = {
  endDate: getDate("today"),
  startDate: getDate("threeDay"),
  limit: 25,
  inOut: "",
  records: {},
  loading: false,
  error: null,
  filtersList: {
    types: false,
    employer: false,
    calls: false,
    evaluations: false,
    errors: false,
  },
  cancelFilterState: false,
};

export { initialState };
