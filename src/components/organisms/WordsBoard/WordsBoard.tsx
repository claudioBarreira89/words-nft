import { FC } from "react";
import { MAX_WORDS, WORD_LENGTH } from "../../../config";
import WordTiles from "../../molecules/WordTiles";
import { WordsBoardProps } from "./WordsBoard.types";

const WordsBoard: FC<WordsBoardProps> = ({ words }) => {
  const wordRows = Array.apply(null, Array(MAX_WORDS)).map((_, i) => (
    <WordTiles key={i} word={words[i]} />
  ));

  return <div>{wordRows}</div>;
};

export default WordsBoard;
