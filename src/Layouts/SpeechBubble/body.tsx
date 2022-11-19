import React from "react";
import { Bubble } from "src/types/bubble";

export const Body = ({
  title,
  text,
}: Omit<Bubble, "children" | "position">) => {
  return (
    <div className="max-w-xs border-2 border-solid p-3">
      <p>
        <span className="mr-1 font-bold">{title}</span>
        {text}
      </p>
    </div>
  );
};
