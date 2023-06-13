import { useCallsFeatures, useCallsFeaturesAction } from "../../model";
import styles from "./CancelFilters.module.scss";

const CancelFilters = () => {
  const { filtersList, cancelFilterState } = useCallsFeatures();
  const { cancelFilter } = useCallsFeaturesAction();

  const checkActiveFilters = () => {
    for (const prop of Object.values(filtersList)) {
      if (prop) {
        return true;
      }
    }
    return false;
  };

  if (!checkActiveFilters() || cancelFilterState) {
    return null;
  }

  return (
    <span onClick={() => cancelFilter()} className={styles.root}>
      Сбросить фильтры x
    </span>
  );
};

export { CancelFilters };
