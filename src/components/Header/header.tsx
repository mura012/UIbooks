import Link from "next/link";
import React, { ReactElement } from "react";
import {
  IconPencil,
  IconBook,
  IconPaperBag,
  TablerIcon,
  IconHome,
} from "@tabler/icons";

type Data = {
  link: string;
  label: string;
  icon: ReactElement<TablerIcon>;
};

const data: Data[] = [
  { link: "/", label: "test", icon: <IconHome /> },
  { link: "", label: "blog", icon: <IconBook /> },
  { link: "", label: "book", icon: <IconPencil /> },
  { link: "", label: "portfolio", icon: <IconPaperBag /> },
];

export const Header = () => {
  return (
    <header className="flex h-12 items-center justify-around bg-pink-500 text-2xl">
      <div>UIbooks</div>
      <nav>
        <ul className="flex space-x-2">
          {data.map((item) => {
            return (
              <li key={item.label}>
                <Link href={item.link}>
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
