const WORD = ["A", "G", "E", "N", "T"];

const useWordsValidation = () => {
  const validate = (word: { value: string; status: string }[]) => {
    return word.map((letter, i) => {
      return {
        value: letter.value,
        status: getLetterStatus(letter.value, i),
      };
    });
  };

  return [validate];
};

const getLetterStatus = (letter: string, i: number) => {
  if (WORD[i] === letter) return "correct";
  if (WORD.includes(letter)) return "partial";

  return "wrong";
};

export default useWordsValidation;
