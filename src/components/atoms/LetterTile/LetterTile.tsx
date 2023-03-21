import { FC } from "react";
import classNames from "classnames";
import { LetterTileProps } from "./LetterTile.types";

import styles from "./LetterTile.module.css";

const LetterTile: FC<LetterTileProps> = ({ status, children }) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.correct]: status === "correct",
        [styles.partial]: status === "partial",
        [styles.wrong]: status === "wrong",
      })}
    >
      {children}
    </div>
  );
};

export default LetterTile;
