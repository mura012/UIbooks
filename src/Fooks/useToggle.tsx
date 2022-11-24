import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return { toggle, handleToggle };
};
