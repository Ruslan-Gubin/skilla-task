import { memo, useEffect, useRef, useState } from "react";
import * as entities from "../../../entities";
import { CallsRecord } from "../../../features";
import { getFormattedDurationTime } from "../../../features/calls/libs/helpers/getFormattedDurationTime";
import { TypeCalls } from "../../../shared";

import styles from "./CallsField.module.scss";

const CallsField = memo(({ call }: { call: entities.CallsModel }) => {
  const [hover, setHover] = useState<boolean>(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  const handleSetHover = () => {
    setHover(() => true);
  };
  const handleCancelHover = () => {
    setHover(() => false);
  };

  useEffect(() => {
    if (!hoverRef.current) return;

    const node = hoverRef.current;

    node.addEventListener("mouseenter", handleSetHover);
    node.addEventListener("mouseleave", handleCancelHover);
    return () => {
      node.removeEventListener("mouseenter", handleSetHover);
      node.removeEventListener("mouseleave", handleCancelHover);
    };
  }, []);

  return (
    <div ref={hoverRef} className={styles.root}>
      <div className={styles.types}>
        <TypeCalls type={call.in_out} />
      </div>
      <div className={styles.time}>
        <entities.CallsTime date={call.date} />
      </div>
      <div className={styles.employee}>
        <entities.CallsEmployee avatar={call.person_avatar} />
      </div>
      <div className={styles.call}>
        <entities.Calls
          contactCompany={call.contact_company}
          name={call?.contact_name}
          partnerData={call.partner_data}
          phone={call.partner_data?.phone}
        />
      </div>
      <div className={styles.source}>{call.source}</div>
      <div className={styles.evaluation}>
        <entities.CallsEvaluation />
      </div>
      <div className={styles.duration}>
        {call.record ? (
          <>
            {hover ? (
              <CallsRecord
                record_id={call.record}
                partner_id={call.partnership_id}
                callDuration={getFormattedDurationTime(call.time)}
              />
            ) : (
              <span>{getFormattedDurationTime(call.time)}</span>
            )}
          </>
        ) : (
          <span>{""}</span>
        )}
      </div>
    </div>
  );
});

export { CallsField };
