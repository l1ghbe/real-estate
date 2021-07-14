import styles from "./Button.module.scss";
import Image from "next/image";

// export const buttonType = {
//     black: "black",
//     transparent: "transparent",
//     white: "white",
//     disabled: "disabled",
// };
const Button = ({
  type = "black",
  text,
  onClick,
  marginRight = "0px",
  fz = "16px",
  icon = false,
  arrow = false,
  fullWidth,
}) => {
  const style = fullWidth ? { width: "100%" } : null;
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${styles.button} ${styles[type]}`}
    >
      <p style={{ marginRight: `${marginRight}`, fontSize: `${fz}` }}>{text}</p>
      {icon ? (
        <Image
          src="/images/arrows/white-right.svg"
          className={styles.icon}
          width={20}
          height={20}
          alt="right"
        />
      ) : null}
      {arrow ? (
        <Image
          src="/images/arrows/right-just-white.svg"
          width={20}
          height={13}
          alt="left"
        />
      ) : null}
    </button>
  );
};

export default Button;
