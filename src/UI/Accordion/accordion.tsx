import { IconArrowBack, IconArrowRight } from "@tabler/icons";
import Image from "next/image";
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
    <>
      <div className={bgColor}>
        <button
          onClick={handleClick}
          className="rotate-90 transform transition-all"
        >
          <p className={open ? "rotate-90 transform" : ""}>→</p>
          {/* <img  className={open ? "rotate-90 transform" : ""}>→</img> */}
          {buttonText}
        </button>
        <p className="transition-all">{open ? text : ""}</p>
      </div>
    </>
  );
};
