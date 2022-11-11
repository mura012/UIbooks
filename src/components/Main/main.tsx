import React from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export const Main = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};
