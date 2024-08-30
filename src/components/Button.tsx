// import React from "react";
import React from 'react';
import styles from './style.module.css'

type btnPropType = {
type : string,
onClick : ()=> void,
children? : React.ReactNode,
}

function Button({ type, onClick, children }:btnPropType) {
  return <>
    <button className={styles[type]} onClick={onClick}>{children}</button>
  </>
}

export default Button;
