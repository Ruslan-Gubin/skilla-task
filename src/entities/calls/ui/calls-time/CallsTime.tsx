import { getTimeCalls } from "../../libs";

const CallsTime = ({ date }: { date: string }) => {
  return <>{getTimeCalls(date)}</>;
};

export { CallsTime };
