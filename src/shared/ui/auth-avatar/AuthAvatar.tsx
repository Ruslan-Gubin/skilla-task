import styles from "./AuthAvatar.module.scss";

const AuthAvatar = () => {
  return (
    <svg
      className={styles.root}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="40" height="40" rx="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_1807"
            transform="translate(-0.328125 0.000736743) scale(0.0024375)"
          />
        </pattern>
        <image
          id="image0_1_1807"
          width="750"
          height="910"
        />
      </defs>
    </svg>
  );
};

export { AuthAvatar };