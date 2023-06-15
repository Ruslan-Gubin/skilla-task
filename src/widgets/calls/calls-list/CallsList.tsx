import { useEffect } from "react";
import { useCalls, useCallsAction } from "../../../entities";
import { useCallsFeatures } from "../../../features";
import { Loader } from "../../../shared";
import { CallsField } from "../calls-field/CallsField";
import { CallsNotification } from "../calls-notification/CallsNotification";

import styles from "./CallsList.module.scss";

const CallsList = () => {
  const { getAllCalls } = useCallsAction();
  const { calls, loading, error } = useCalls();
  const { endDate, startDate, inOut, limit } = useCallsFeatures();

  useEffect(() => {
    getAllCalls({
      endDate,
      inOut,
      limit,
      startDate,
    });
  }, [endDate, startDate, inOut, limit]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.root}>
      <CallsNotification />
      <ul>
        {calls &&
          calls.map((field) => <CallsField key={field.id} call={field} />)}
      </ul>
    </div>
  );
};

export { CallsList };
