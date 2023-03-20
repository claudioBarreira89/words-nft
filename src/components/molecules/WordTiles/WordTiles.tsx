import { FC } from "react";
import LetterTile from "../../atoms/LetterTile";
import { WordTilesProps } from "./WordTiles.types";

import styles from "./WordTiles.module.css";
import { WORD_LENGTH } from "../../../config";

const WordTiles: FC<WordTilesProps> = ({ word = "" }) => {
  const letters = word.split("");

  const lettersRow = Array.apply(null, Array(WORD_LENGTH)).map((_, i) => (
    <LetterTile key={i}>{letters[i]}</LetterTile>
  ));

  return <div className={styles.wrapper}>{lettersRow}</div>;
};

export default WordTiles;
