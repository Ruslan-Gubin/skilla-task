import { ReqAllCalls } from "../../../entities";
import { ReqRecordPartner } from "../../../features";


export const CallsRoute = {
  getAllCalls: ({ startDate, endDate, inOut, limit }:ReqAllCalls) => `/getList?date_start=${startDate}&date_end=${endDate}&in_out=${inOut}&limit=${limit}`,
  getRecord: ({ partner_id, record_id }:ReqRecordPartner) => `/getRecord?record=${record_id}&partnership_id=${partner_id}`,
};
