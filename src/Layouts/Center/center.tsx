import React, { ReactNode } from "react";

export const Center = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
};
