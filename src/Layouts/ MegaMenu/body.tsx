import React from "react";
import { MegaMenu } from "src/types/megaMenu";

export const Body = ({
  title,
  text,
}: Omit<MegaMenu, "children" | "position">) => {
  return (
    <div className="max-w-xs border-2 border-solid p-3">
      <p>
        <span className="mr-1 font-bold">{title}</span>
        {text}
      </p>
    </div>
  );
};
