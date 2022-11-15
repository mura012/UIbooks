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

const link: Data[] = [
  { link: "/", label: "Home", icon: <IconHome /> },
  { link: "", label: "Blog", icon: <IconBook /> },
  { link: "", label: "Book", icon: <IconPencil /> },
  { link: "", label: "Portfolio", icon: <IconPaperBag /> },
];

export const Header = () => {
  return (
    <header className="flex h-12 items-center justify-around bg-pink-500 text-2xl">
      <div>UIbooks</div>
      <nav>
        <ul className="flex space-x-2">
          {link.map((item) => {
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
