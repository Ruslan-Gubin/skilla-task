import { formattedDateHeader, updateDateFirstLetter } from "../../libs/formattedDate";

import styles from './LayoutHeaderDate.module.scss';

const LayoutHeaderDate = () => {
  const date = Date.now();

  return (
      <span className={styles.date}>{updateDateFirstLetter(formattedDateHeader.format(date))}</span>
  );
};

export { LayoutHeaderDate };
