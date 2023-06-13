import { FC } from "react";
import { TypeCalls } from "../../../../shared";
import { getTimeCalls } from "../../libs";
import { CallsModel } from "../../model";
import { CallsEmployee } from "../calls-employee/CallsEmployee";
import { CallsEvaluation } from "../calls-evaluation/CallsEvaluation";
import { Calls } from "../calls/Calls";

import styles from "./CallsField.module.scss";

interface CallsFieldProps {
  call: CallsModel;
}

const CallsField: FC<CallsFieldProps> = ({ call }) => {
  console.log(call.partner_data);

  return (
    <div className={styles.root}>
      <div className={styles.types}>
        <TypeCalls type={call.in_out} />
      </div>
      <div className={styles.time}>{getTimeCalls(call.date)}</div>
      <div className={styles.employee}>
        <CallsEmployee avatar={call.person_avatar} />
      </div>
      <div className={styles.call}>
        <Calls
          contactCompany={call.contact_company}
          name={call?.contact_name}
          partnerData={call.partner_data}
          phone={call.partner_data?.phone}
        />
      </div>
      <div className={styles.source}>{call.source}</div>
      <div className={styles.evaluation}>
        <CallsEvaluation />
      </div>
      <div className={styles.duration}>{call.time}</div>
    </div>
  );
};

export { CallsField };
