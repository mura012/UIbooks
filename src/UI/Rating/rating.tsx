import { Button } from "@mantine/core";
import { ClickEvent } from "src/types/event";
import React, { useState } from "react";
import { SpeechBubble } from "src/Layouts/SpeechBubble";

type Props = {
  num: number;
  check: boolean;
};

const star: Props[] = [
  { num: 1, check: false },
  { num: 2, check: false },
  { num: 3, check: false },
  { num: 4, check: false },
  { num: 5, check: false },
];
export const Rating = () => {
  const [stars, setStars] = useState<Props[]>(star);

  const handleClick = (e: ClickEvent, num: number) => {
    e.preventDefault();
    setStars((prevStars) => {
      return prevStars.map((item) => {
        // 押した星の番号より大きいものをfalse
        if (item.num > num) {
          return { ...item, check: false };
        }
        // 押した星の番号以下のものをtrue
        if (item.num <= num) {
          return { ...item, check: true };
        }
        return item;
      });
    });
  };
  const handleClear = (e: ClickEvent) => {
    e.preventDefault();
    setStars((prevStars) => {
      return prevStars.map((item) => {
        return { ...item, check: false };
      });
    });
  };
  const result = stars.filter((item) => item.check === true);
};
