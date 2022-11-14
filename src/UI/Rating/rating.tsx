import { Button } from "@mantine/core";
import { clickEvent } from "src/types/event";
import React, { useState } from "react";

export const Rating = () => {
  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [check3, setCheck3] = useState<boolean>(false);
  const [check4, setCheck4] = useState<boolean>(false);
  const [check5, setCheck5] = useState<boolean>(false);
  const star = [
    { num: 1, check: check1, change: setCheck1 },
    { num: 2, check: check2, change: setCheck2 },
    { num: 3, check: check3, change: setCheck3 },
    { num: 4, check: check4, change: setCheck4 },
    { num: 5, check: check5, change: setCheck5 },
  ];

  const middleware = (e: clickEvent) => {
    e.preventDefault();
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
    setCheck5(false);
  };

  const handleClick = (e: clickEvent, num: number) => {
    middleware(e);
    for (let i = 0; i < num; i++) {
      star[i].change(true);
    }
  };
  const handleClear = (e: clickEvent) => {
    middleware(e);
  };
  return (
    <div className="m-4 w-1/5 min-w-fit border-2 border-solid bg-white p-3">
      <ul className="m-2 flex">
        {star.map((item) => {
          return (
            <li key={item.num}>
              <button
                onClick={(e: clickEvent) => handleClick(e, item.num)}
                className="border-0 bg-white text-xl text-yellow-400"
              >
                {item.check ? "★" : "☆"}
              </button>
            </li>
          );
        })}
      </ul>
      <Button
        onClick={(e: clickEvent) => {
          handleClear(e);
        }}
        className="m-2"
      >
        クリア
      </Button>
    </div>
  );
};
