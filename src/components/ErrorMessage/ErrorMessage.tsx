import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return <p className={styles.error}>{errorMessage}</p>;
};

export default ErrorMessage;
