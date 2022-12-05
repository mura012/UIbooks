import { useState } from "react";
import { SpeechBubble } from "src/Layouts/SpeechBubble";
import { ChangeEvent } from "src/types/event";

type Props = {
  radioLabel: string[];
};

export const Radio = ({ radioLabel }: Props) => {
  const handleChange = (e: ChangeEvent) => setValue(e.target.value);
  const [value, setValue] = useState<string>(radioLabel[0]);

  return (
    <SpeechBubble
      title="ラジオボタン"
      text="複数の選択肢の中から1つだけ選択する場合に用いられる。"
      position="bottom"
    >
      {radioLabel.map((item) => {
        return (
          <label key={item}>
            <input
              type="radio"
              value={item}
              checked={value === item}
              onChange={handleChange}
            />
            {item}
          </label>
        );
      })}
    </SpeechBubble>
  );
};
