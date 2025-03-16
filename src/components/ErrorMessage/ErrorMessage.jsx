import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ errormessage }) => {
    return <p className={styles.error}>{errormessage}</p>;
};

export default ErrorMessage;
