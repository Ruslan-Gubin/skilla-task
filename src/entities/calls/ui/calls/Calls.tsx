import { FC, memo } from "react";
import { formattedPhone } from "../../libs";
import styles from "./Calls.module.scss";

interface CallsProps {
  partnerData: { id: string; name: string; phone: string };
  contactCompany: string;
  phone: string;
  name: string;
}

const Calls: FC<CallsProps> = memo(
  ({ partnerData, contactCompany, phone, name }) => {
    return (
      <>
        {partnerData && (
          <>
            <span>{name}</span>
            {contactCompany ? (
              <span className={styles.company}>{contactCompany}</span>
            ) : (
              <span>{formattedPhone(phone)}</span>
            )}
          </>
        )}
      </>
    );
  }
);

export { Calls };
