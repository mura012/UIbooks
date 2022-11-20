import React from "react";
import { SpeechBubble } from "src/types/speechBubble";

export const Body = ({
  title,
  text,
}: Omit<SpeechBubble, "children" | "position">) => {
  return (
    <div className="max-w-xs border-2 border-solid p-3">
      <p>
        <span className="mr-1 font-bold">{title}</span>
        {text}
      </p>
    </div>
  );
};
