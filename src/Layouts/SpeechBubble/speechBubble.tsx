import React, { ReactNode } from "react";
import { Bubble } from "src/types/Bubble";
import { Body } from "./body";
import classes from "./speechBubble.module.css";

export const SpeechBubble = ({ children, title, text }: Bubble) => {
  return (
    <div className={classes.group}>
      {children}
      <div className={classes.test}>
        <Body text={text} title={title} />
      </div>
    </div>
  );
};
