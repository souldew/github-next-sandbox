import styles from "./Button.module.scss";

type Props = {
  onClick: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button = ({ variant = "primary", onClick, children }: Props) => {
  const colorClass = styles[variant];
  return (
    <button className={`${styles.button} ${colorClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
