import Link from "next/link";
import React from "react";

type Data = {
  link: string;
  label: string;
};

const data: Data[] = [
  { link: "", label: "blog" },
  { link: "", label: "book" },
  { link: "", label: "portfolio" },
  { link: "", label: "test" },
];

export const Header = () => {
  return (
    <header className="flex h-12 items-center justify-around bg-pink-500 text-2xl">
      <div>uibooks</div>
      <nav>
        <ul className="flex space-x-2">
          {data.map((item) => {
            return (
              <li key={item.label}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
