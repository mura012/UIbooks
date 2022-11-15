import React from "react";
import { Accordion } from "src/UI/Accordion";
import { AccordionWrapper } from "src/UI/Accordion";

export const MainContent = () => {
  return (
    <main className="grow bg-green-100">
      <AccordionWrapper>
        <Accordion buttonText="開く上" text="テキスト上" />
        <Accordion buttonText="開く下" text="テキスト下" />
      </AccordionWrapper>
      <AccordionWrapper>
        <Accordion buttonText="開く上" text="テキスト上" />
        <Accordion buttonText="開く下" text="テキスト下" />
      </AccordionWrapper>
    </main>
  );
};
