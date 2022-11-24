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
<<<<<<< HEAD
=======

  return (
    <div className="flex min-w-fit items-center bg-white">
      <ul className="flex">
        {stars.map((item) => {
          return (
            <li key={item.num}>
              <button
                onClick={(e: ClickEvent) => handleClick(e, item.num)}
                className="cursor-pointer border-0 bg-white text-3xl text-yellow-400"
              >
                {item.check ? "★" : "☆"}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center">
        <Button
          onClick={(e: ClickEvent) => {
            handleClear(e);
          }}
          className="m-2"
        >
          クリア
        </Button>
        <p>評価：{result.length}/5</p>
      </div>
    </SpeechBubble>
  );
>>>>>>> ea79e8f (吹き出しをいろいろなところに適用した)
};
