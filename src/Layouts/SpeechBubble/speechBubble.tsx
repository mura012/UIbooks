import React from "react";
import { SpeechBubble as Props } from "src/types/speechBubble";
import { Body } from "./body";
import classes from "./speechBubble.module.css";

export const SpeechBubble = ({ children, title, text, position }: Props) => {
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
