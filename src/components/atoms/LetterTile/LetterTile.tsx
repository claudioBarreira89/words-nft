import { FC } from "react";
import { LetterTileProps } from "./LetterTile.types";

import styles from "./LetterTile.module.css";

const LetterTile: FC<LetterTileProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default LetterTile;
