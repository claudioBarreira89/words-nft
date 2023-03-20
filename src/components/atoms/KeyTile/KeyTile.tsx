import { FC } from "react";
import { KeyTileProps } from "./KeyTile.types";

import styles from "./KeyTile.module.css";

const KeyTile: FC<KeyTileProps> = ({ onClick, value }) => {
  return (
    <div onClick={() => onClick(value)} className={styles.wrapper}>
      {value}
    </div>
  );
};

export default KeyTile;
