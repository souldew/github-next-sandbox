import clsx from "clsx";
import styles from "./Button.module.scss";

type Props = {
  onClick: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button = ({ variant = "primary", onClick, children }: Props) => {
  const className = clsx(styles.button, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
  });

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
