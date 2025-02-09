import { RotatingLines } from "react-loader-spinner";
import React from "react";
import css from "./Loader.module.css"

const Loader: React.FC = () => {
  return (
     <div className={css.loader}>
    <RotatingLines
      visible={true}
      width="96"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      />
      </div>
  );
};

export default Loader;