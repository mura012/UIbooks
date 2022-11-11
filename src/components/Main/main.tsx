import React from "react";
import { Aside } from "./Aside";
import { MainContent } from "./MainContent";

export const Main = () => {
  return (
    <div className="flex h-screen">
      <Aside />
      <MainContent />
    </div>
  );
};
