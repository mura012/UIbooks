import { useEffect, useState } from "react";
import { useFocus } from "src/context/focusContext";
import { SpeechBubble as Props } from "src/types/speechBubble";
import { Body } from "./body";
import classes from "./speechBubble.module.css";

export const SpeechBubble = ({
  children,
  title,
  text,
  position,
  link,
  site,
  fit,
}: Props) => {
  const [focus] = useFocus();
  const [time, setTime] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const mouseIn = () => {
    setTime(true);
  };
  const mouseOut = () => {
    setTime(false);
    setShowModal(false);
  };

  useEffect(() => {
    let activeFunction: string | number | NodeJS.Timeout | undefined =
      undefined;
    if (time) {
      activeFunction = setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
    return () => {
      clearTimeout(activeFunction);
    };
  }, [time]);

  return (
    <div
      onMouseEnter={mouseIn}
      onMouseLeave={mouseOut}
      className={`${fit ? "w-fit" : ""}${focus ? "" : " bg-blue-300 p-1"}`}
    >
      {position === "top" && (
        <div
          className={classes.top}
          style={showModal ? { display: "block" } : { display: "none" }}
        >
          <Body text={text} title={title} link={link} site={site} />
        </div>
      )}
      {children}
      {position === "bottom" && (
        <div
          className={classes.bottom}
          style={showModal ? { display: "block" } : { display: "none" }}
        >
          <Body text={text} title={title} link={link} site={site} />
        </div>
      )}
    </div>
  );
};
