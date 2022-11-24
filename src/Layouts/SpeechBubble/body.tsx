import Link from "next/link";
import React from "react";
import { SpeechBubble } from "src/types/speechBubble";

export const Body = ({
  title,
  text,
  link,
  site,
}: Omit<SpeechBubble, "children" | "position">) => {
  return (
    <div className="max-w-xs border-2 border-solid p-3">
      <p>
        <span className="mr-1 font-bold">{title}</span>
        {text}
      </p>
      <p className="text-gray-400">
        使われているサイト：
        <Link href={link} className="text-gray-400 underline">
          {site}
        </Link>
      </p>
    </div>
  );
};
