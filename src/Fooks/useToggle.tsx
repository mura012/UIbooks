import { useState } from "react";
import { ClickEvent } from "src/types/event";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = (e: ClickEvent) => {
    e.preventDefault();
    setToggle((prevToggle) => !prevToggle);
  };
  return { toggle, handleToggle };
};
