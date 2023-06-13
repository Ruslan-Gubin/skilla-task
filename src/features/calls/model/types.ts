export interface CallsFearuresInitState {
  loading: boolean;
  error: string | null;
  endDate: string;
  startDate: string;
  limit: number;
  inOut: number | string;
  records: {
    [records_id: string]: string;
  };
  filtersList: {
    [property: string]: boolean;
    types: boolean;
    employer: boolean;
    calls: boolean;
    evaluations: boolean;
    errors: boolean;
  };
  cancelFilterState: boolean;
}

export interface ReqRecordPartner {
  record_id: string;
  partner_id: string;
}

export interface CallsRecordProps {
  partner_id: string;
  record_id: string;
  callDuration: string;
}

export type PeriodVariant = "week" | "threeDay" | "year" | "today" | "month";

export interface CallsDropDownProps {
  name?: string;
  initialOptions: {
    value: string;
    label: string;
    img?: string;
    checked: boolean;
  }[];
}
