import { ReactNode } from "react";

export const AccordionWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="m-2 border border-solid">{children}</div>;
};
