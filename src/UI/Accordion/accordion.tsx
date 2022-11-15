import { MouseEventHandler, useState } from "react";

type Props = {
  buttonText: string;
  text: string;
};

export const Accordion = ({ buttonText, text }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="w-full">
      <div className="flex hover:bg-gray-200" onClick={handleClick}>
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
      <p> {open ? text : ""} </p>
    </div>
  );
};
