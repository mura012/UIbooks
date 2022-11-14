import React from "react";

import { HamburgerMenu } from "src/UI/HamburgerMenu";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-start  bg-red-100 transition-all">
      <HamburgerMenu />
    </aside>
  );
};
