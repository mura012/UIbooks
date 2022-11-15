import { useState } from "react";
import { clickEvent } from "src/types/event";

type Props = {
  color: string;
  buttonText: string;
  text: string;
};

export const Accordion = ({ color, buttonText, text }: Props) => {
  const bgColor = `bg-${color}-500`;
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = (e: clickEvent) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="rotate-90 transform transition-all"
      >
        <p style={open ? { transform: "rotate(0.25turn)" } : undefined}>→</p>
        <p>{buttonText}</p>
      </button>
      <p className={bgColor}>{open ? text : ""}</p>
    </div>
  );
};
