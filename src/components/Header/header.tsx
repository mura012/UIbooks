import Link from "next/link";
import React, { ReactElement } from "react";
import {
  IconPencil,
  IconBook,
  IconPaperBag,
  TablerIcon,
  IconHome,
} from "@tabler/icons";
import { SpeechBubble } from "src/Layouts/SpeechBubble";

type Data = {
  link: string;
  label: string;
  icon: ReactElement<TablerIcon>;
};

const link: Data[] = [
  { link: "/", label: "Home", icon: <IconHome /> },
  { link: "blog", label: "Blog", icon: <IconBook /> },
  { link: "", label: "Book", icon: <IconPencil /> },
  { link: "/test", label: "Test", icon: <IconPaperBag /> },
];

export const Header = () => {
  return (
    <SpeechBubble
      title="ヘッダー"
      text="データや文書の本体の先頭に付け加えられる、そのデータや文書自体についての情報を記述した部分のこと。サイト名やイメージ画像、グローバルナビゲーションを書く"
      position="bottom"
    >
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
    </SpeechBubble>
  );
};
