import css from "./ErrorMessage.module.css";
import React from "react";

const ErrorMessage: React.FC = () => {
    return (
        <p className={css.errorMessage}>Oops! Something went wrong. Try again</p>
    );
};


export default ErrorMessage;