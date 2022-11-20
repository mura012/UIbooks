import React, { useState } from "react";
import { MegaMenu as Props } from "src/types/megaMenu";
import { Body } from "./body";
import classes from "./megaMenu.module.css";

export const MegaMenu = ({ children, title, text, position }: Props) => {
  return (
    <div className={classes.group}>
      {position === "top" && (
        <div className={classes.top}>
          <Body text={text} title={title} />
        </div>
      )}
      {children}
      {position === "bottom" && (
        <div className={classes.bottom}>
          <Body text={text} title={title} />
        </div>
      )}
    </div>
  );
};
