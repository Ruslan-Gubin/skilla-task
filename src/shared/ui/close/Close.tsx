import styles from "./Close.module.scss";

interface CloseProps {
  onClick: () => void;
  addClass?: string;
}

const Close = ({ onClick }: CloseProps) => {
  return <div onClick={onClick} className={styles.close}></div>;
};

export { Close };
