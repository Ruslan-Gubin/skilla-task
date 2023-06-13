import { FC } from "react";
import styles from "./ModalDropDown.module.scss";

interface ModalOptionsProps {
  options: { value: string; label: string; img?: string; checked: boolean }[];
  children?: React.ReactElement;
  onChange: (label: any) => void;
}

const ModalDropDown: FC<ModalOptionsProps> = ({
  options,
  children,
  onChange,
}) => {
  return (
    <div className={styles.root}>
      <ul>
        {options.map((option) => (
          <li
            onClick={() => onChange(option.label)}
            key={option.label}
            className={
              option.checked
                ? `${styles.option} ${styles.active}`
                : styles.option
            }
          >
            {option.img && (
              <img className={styles.img} src={option.img} alt="option img" />
            )}
            {option.value}
          </li>
        ))}

        {children && <div className={styles.children}>{children}</div>}
      </ul>
    </div>
  );
};

export { ModalDropDown };
