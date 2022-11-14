import { Button } from "@mantine/core";
import { clickEvent } from "src/types/event";
import React from "react";

export const MainContent = () => {
  const star = [1, 2, 3, 4, 5];
  const handleClick = (e: clickEvent, item: number) => {
    e.preventDefault();
    for (let i = 0; i < item; i++) {
      console.log(star[i]);
    }
  };

  return (
    <main className="grow bg-green-100">
      <ul className="flex">
        {star.map((item) => {
          return (
            <li key={item}>
              <Button onClick={(e: clickEvent) => handleClick(e, item)}>
                ⭐️
              </Button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
