import { ReactNode } from "react";
import { SpeechBubble } from "src/Layouts/SpeechBubble";

type Prop = {
  children: ReactNode;
};

export const BadgeWrapper = ({ children }: Prop) => {
  return (
    <SpeechBubble
      title="バッジ"
      text="見出しの横などにある、サブ見出しのようなもの。「フォーム」や「ブログのタグ一覧」などに使用されることも多い。"
      position="bottom"
      fit
    >
      <div className="flex">{children}</div>
    </SpeechBubble>
  );
};
