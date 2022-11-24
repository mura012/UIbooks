import React from "react";
import { SpeechBubble } from "src/Layouts/SpeechBubble";

export const Footer = () => {
  return (
    <SpeechBubble
      title="フッター"
      text="文書の各ページの内部を役割やデザインで分割した領域の一つで、ページの下端部のこと。 会社情報、コピーライト（著作権)などを書く"
      position="top"
    >
      <footer className="flex h-12 items-center justify-center bg-slate-300">
        Copyright © 2022 □□□□ Corporation.
      </footer>
    </SpeechBubble>
  );
};
