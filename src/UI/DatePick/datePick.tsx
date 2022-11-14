import React, { useState } from "react";
import { Center } from "src/Layouts/Center";
import { DatePicker } from "@mantine/dates";
import { submitEvent } from "src/types/event";

export const DatePick = () => {
  const [value, onChange] = useState<any>("");
  const [date, setDate] = useState<boolean>(false);

  const handleSubmit = (e: submitEvent): void => {
    e.preventDefault();
    if (!value) {
      setDate(true);
      return;
    }
    setDate(false);
  };

  return (
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
  );
};
