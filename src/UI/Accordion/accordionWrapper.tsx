import { ReactNode } from "react";
import { SpeechBubble } from "src/Layouts/SpeechBubble";

export const AccordionWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SpeechBubble
      title="アコーディオンメニュー"
      text="Webページなどの表示・操作要素の一つで、選択した項目がその場で広がって詳細な内容を表示する形式のメニューのこと。"
      position="bottom"
    >
      <div className="m-2 border border-solid">{children}</div>
    </SpeechBubble>
  );
};
