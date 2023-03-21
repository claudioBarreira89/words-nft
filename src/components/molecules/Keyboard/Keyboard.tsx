import { FC } from "react";
import KeyTile from "../../atoms/KeyTile";

import styles from "./Keyboard.module.css";
import { KeyboardProps } from "./Keyboard.types";

const Keyboard: FC<KeyboardProps> = ({ onKeyClick, onEnter, onBack }) => {
  const handleClick = (value: string) => {
    onKeyClick(value);
  };

  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const keyboardLayout = [
    keyboardRows[0].map((v) => ({ action: handleClick, label: v })),
    keyboardRows[1].map((v) => ({ action: handleClick, label: v })),
    [
      { action: onEnter, label: "ENTER" },
      ...keyboardRows[2].map((v) => ({ action: handleClick, label: v })),
      { action: onBack, label: "BACK" },
    ],
  ];

  return (
    <div>
      {keyboardLayout.map((row) => (
        <div className={styles.row}>
          {row.map((el) => (
            <KeyTile onClick={el.action} value={el.label} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
