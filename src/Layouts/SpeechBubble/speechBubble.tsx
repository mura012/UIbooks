import React, { useEffect, useState } from "react";
import { SpeechBubble as Props } from "src/types/speechBubble";
import { Body } from "./body";
import classes from "./speechBubble.module.css";

export const SpeechBubble = ({ children, title, text, position }: Props) => {
  const [time, setTime] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const mouseIn = () => {
    setTime(true);
    console.log("マウスインした");
  };
  const mouseOut = () => {
    setTime(false);
    setShowModal(false);
    console.log("マウスアウトした");
  };

  useEffect(() => {
    if (time === true) {
      var timer = setTimeout(() => {
        setShowModal(true);
        console.log("１びょうたった");
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [time]);
  return (
    <div className={classes.group} onMouseOver={mouseIn} onMouseOut={mouseOut}>
      {position === "top" && (
        <div
          className={classes.top}
          style={showModal ? { display: "block" } : { display: "none" }}
        >
          <Body text={text} title={title} />
        </div>
      )}
      {children}
      {position === "bottom" && (
        <div
          className={classes.bottom}
          style={showModal ? { display: "block" } : { display: "none" }}
        >
          <Body text={text} title={title} />
        </div>
      )}
    </div>
  );
};
