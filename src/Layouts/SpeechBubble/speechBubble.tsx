import React from "react";
import { Bubble } from "src/types/bubble";
import { Body } from "./body";
import classes from "./speechBubble.module.css";

export const SpeechBubble = ({ children, title, text, position }: Bubble) => {
  console.log(position === "top");
  return (
    <div className={classes.group}>
      {position === "top" && (
        <div className={classes.top}>
          <Body text={text} title={title} />
        </div>
      )}
      {children}
      {position === "bottom" && (
        <div className={classes.bottom}>
          <Body text={text} title={title} />
        </div>
      )}
    </div>
  );
};
