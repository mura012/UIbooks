import { MouseEventHandler, useState } from "react";
import { clickEvent } from "src/types/event";

type Props = {
  color: string;
  buttonText: string;
  text: string;
};

export const Accordion = ({ color, buttonText, text }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div onClick={handleClick} className="w-screen">
      <div className="flex hover:bg-gray-200">
        <p
          style={
            open
              ? { transform: "rotate(0.25turn)", transition: "all 0.3s" }
              : { transition: "all 0.3s" }
          }
        >
          →
        </p>
        <p className="ml-4">{buttonText}</p>
      </div>
      <p style={{ backgroundColor: color }}> {open ? text : ""} </p>
    </div>
  );
};
