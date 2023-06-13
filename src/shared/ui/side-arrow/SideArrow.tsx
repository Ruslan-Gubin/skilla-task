import styles from "./SideArrow.module.scss";

const SideArrow = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <div>
      {direction === "left" ? (
        <svg
          className={styles.arrow}
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.175 8.825L2.35833 5L6.175 1.175L5 0L0 5L5 10L6.175 8.825Z"
            fill="#002CFB"
          />
        </svg>
      ) : (
        <svg
          className={styles.arrow}
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.589844 8.825L4.40651 5L0.589844 1.175L1.76484 0L6.76484 5L1.76484 10L0.589844 8.825Z"
            fill="#002CFB"
          />
        </svg>
      )}
    </div>
  );
};

export { SideArrow };
