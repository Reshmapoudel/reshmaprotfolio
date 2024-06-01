import React, { FC } from "react";
import styles from "../src/styles/Home.module.css";
import ClassNames from "classnames";
interface props {
  done: any;
}
const ProgressBar: FC<props> = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);
  return (
    <div className={ClassNames(`${styles["progress"]}`)}>
      <div className={ClassNames(`${styles["progress-done"]}`)} style={style}>
        {done}%
      </div>
    </div>
  );
};

export default ProgressBar;
