import { FC } from "react";
import styles from "./ButtonMain.module.scss";

interface ButtonMainProps {
  text: string;
  image?: React.ReactElement;
  onClick?: () => void;
}

const ButtonMain: FC<ButtonMainProps> = ({ text, image, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={styles.button}>
        <>
          <button>{text}</button>
          {image && <div className={styles.button_svg}>{image}</div>}
        </>
      </div>
    </>
  );
};

export { ButtonMain };
