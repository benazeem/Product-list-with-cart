import React from "react";
import styles from './style.modules.css'

type btnPropType  {
type : string,
onClick : ()=> void,
children : string,
}

function Button({ type, onClick, children }) {
  <>
    <button className={styles[type]} onClick={onClick}>{children}</button>
  </>
}

export default Button;
