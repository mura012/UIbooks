import { useState } from "react";
import { Center } from "src/Layouts/Center";
import { DatePicker } from "@mantine/dates";
import { SubmitEvent } from "src/types/event";
import { SpeechBubble } from "src/Layouts/SpeechBubble";

export const DatePick = () => {
  const [value, onChange] = useState<Date | null | undefined>();
  const [date, setDate] = useState<boolean>(false);

  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    if (!value) {
      setDate(true);
      return;
    }
    setDate(false);
  };

  return (
    <SpeechBubble
      title="テートピッカー"
      text="日付を入力する場面で、ポップアップする小さなカレンダーからマウスで簡単に入力できるようにする。"
      position="bottom"
    >
      <Center>
        <h1>実際にはログインできません</h1>
        <form onSubmit={handleSubmit}>
          <DatePicker
            placeholder="日付を選択"
            label="Event date"
            error={date ? "※必須項目です" : ""}
            withAsterisk
            value={value}
            onChange={onChange}
          />
          <input type="text" />
          <button>送信</button>
        </form>
      </Center>
    </SpeechBubble>
  );
};
