export interface PartnerModel {
  id: string;
  name: string;
  phone: string;
}

export interface CallsModel {
  abuse: [];
  contact_company: string;
  contact_name: string;
  date: string;
  date_notime: string;
  disconnect_reason: string;
  errors: string[];
  from_extension: string;
  from_number: string;
  from_site: number;
  id: number;
  in_out: number;
  is_skilla: number;
  line_number: string;
  partner_data: PartnerModel;
  partnership_id: string;
  person_avatar: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  record: string;
  results: { type: string; title: string; tooltip: string }[];
  source: string;
  stages: [];
  status: string;
  time: number;
  to_extension: string;
  to_number: string;
}

export interface CallsInitState {
  calls: CallsModel[];
  total_rows: string;
  loading: boolean;
  error: string | null;
}

export interface ReqAllCalls {
  startDate: string;
  endDate: string;
  limit: number;
  inOut: number | string;
}

export interface ResAllCalls {
  total_rows: string;
  results: CallsModel[];
}
