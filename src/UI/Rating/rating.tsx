import { Button } from "@mantine/core";
import { clickEvent } from "src/types/event";
import React, { useState } from "react";

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

  const handleClick = (e: clickEvent, num: number) => {
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
  const handleClear = (e: clickEvent) => {
    e.preventDefault();
    setStars((prevStars) => {
      return prevStars.map((item) => {
        return { ...item, check: false };
      });
    });
  };
  const result = stars.filter((item) => item.check === true);

  return (
    <div className="flex min-w-fit items-center bg-white">
      <ul className="flex">
        {stars.map((item) => {
          return (
            <li key={item.num}>
              <button
                onClick={(e: clickEvent) => handleClick(e, item.num)}
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
          onClick={(e: clickEvent) => {
            handleClear(e);
          }}
          className="m-2"
        >
          クリア
        </Button>
        <p>評価：{result.length}/5</p>
      </div>
    </div>
  );
};
