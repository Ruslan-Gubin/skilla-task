import { Arrow, AuthAvatar, SearchSvg } from "../../../shared";
import styles from "./HeaderAuth.module.scss";

const HeaderAuth = () => {

  return (
    <div className={styles.root}>
        <SearchSvg/>
        <h2>ИП Сидорова Александра Михайловна</h2>
        <Arrow active={false}/>
        <AuthAvatar />
        <Arrow active={false}/>
      
    </div>
  );
};

export {HeaderAuth};