import styles from "./style.module.css";
import { btnPropType } from "../Types";

function Button({ type, onClick, children }: btnPropType) {
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
