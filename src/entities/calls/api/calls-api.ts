import { AxiosService, CallsRoute } from "../../../shared";
import { ReqAllCalls } from "../model";

export const getCalls = (body: ReqAllCalls) => {
  return AxiosService.post(CallsRoute.getAllCalls(body));
};
