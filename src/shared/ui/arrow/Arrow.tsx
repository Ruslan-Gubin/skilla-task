import styles from "./Arrow.module.scss";

const Arrow = ({ active }: { active: boolean }) => {
  return (
    <div className={styles.root}>
      {active ? (
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0999194 5.23086L0.600886 5.73179C0.66764 5.79869 0.744536 5.83203 0.83147 5.83203C0.918194 5.83203 0.995055 5.79869 1.06181 5.7318L4.99995 1.79387L8.93791 5.73169C9.0047 5.79858 9.08156 5.83193 9.16839 5.83193C9.25525 5.83193 9.33211 5.79858 9.39887 5.73169L9.89976 5.23072C9.96666 5.16397 10 5.08711 10 5.00025C10 4.91345 9.96655 4.83659 9.89976 4.76984L5.23043 0.100393C5.16367 0.0336042 5.08678 0.000227499 4.99995 0.000227491C4.91312 0.000227483 4.83636 0.0336042 4.76964 0.100393L0.0999194 4.76984C0.033166 4.83662 8.03017e-08 4.91349 7.27171e-08 5.00024C6.51232e-08 5.08711 0.033166 5.16397 0.0999194 5.23086Z"
            fill="#002CFB"
          />
        </svg>
      ) : (
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
            fill="#ADBFDF"
          />
        </svg>
      )}
    </div>
  );
};

export { Arrow };
