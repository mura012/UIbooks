import React, { ReactNode } from "react";

export const Center = ({ children }: { children: ReactNode }) => {
  return <div className="m-auto w-3/5 items-center">{children}</div>;
};
