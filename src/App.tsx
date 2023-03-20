import { useReducer, useState } from "react";
import Keyboard from "./components/molecules/Keyboard";
import WordsBoard from "./components/organisms/WordsBoard";
import { MAX_WORDS, WORD_LENGTH } from "./config";

import styles from "./App.module.css";

function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [words, setWords] = useState<string[]>([]);

  const onEnter = () => {
    if (words[wordIndex] && words[wordIndex].length === WORD_LENGTH) {
      if (wordIndex + 1 < MAX_WORDS) setWordIndex(wordIndex + 1);
    }
  };

  const onKeyClick = (value: string) => {
    const currentWord = words[wordIndex] || "";

    if (currentWord?.length === WORD_LENGTH) return;

    const newWords = [...words];
    newWords[wordIndex] = currentWord + value;

    setWords(newWords);
  };

  const onBack = () => {
    const currentWord = words[wordIndex] || "";

    if (currentWord?.length === 0) return;

    const newWords = [...words];
    newWords[wordIndex] = currentWord.slice(0, -1);

    setWords(newWords);
  };

  return (
    <div className={styles.app}>
      <WordsBoard words={words} />
      <Keyboard onKeyClick={onKeyClick} onEnter={onEnter} onBack={onBack} />
    </div>
  );
}

export default App;
