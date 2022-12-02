import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  TablerIcon,
} from "@tabler/icons";
import Link from "next/link";
import { Burger } from "@mantine/core";
import { ReactElement } from "react";
import { SpeechBubble } from "src/Layouts/SpeechBubble";
import { useToggle } from "src/Fooks/useToggle";

type Data = {
  link: string;
  label: string;
  icon: ReactElement<TablerIcon>;
};

const data: Data[] = [
  { link: "", label: "Notifications", icon: <IconBellRinging /> },
  { link: "", label: "Billing", icon: <IconReceipt2 /> },
  { link: "", label: "Security", icon: <IconFingerprint /> },
  { link: "", label: "SSH Keys", icon: <IconKey /> },
  { link: "", label: "Databases", icon: <IconDatabaseImport /> },
  { link: "", label: "Authentication", icon: <Icon2fa /> },
  { link: "", label: "Other Settings", icon: <IconSettings /> },
];

const login: Data[] = [
  { link: "", label: "Change account", icon: <IconSwitchHorizontal /> },
  { link: "", label: "Login", icon: <IconLogout /> },
];

export const HamburgerMenu = () => {
  const { toggle, setToggle } = useToggle();
  const listStyle =
    "p-1.5 hover:rounded-full hover:bg-green-500 flex cursor-pointer";
  return (
    <>
      <div className="flex justify-start">
        <SpeechBubble
          title="ハンバーガーメニュー"
          text="主にスマートフォンやタブレットに対応したWebサイトで見かける三本線「≡」のアイコンを使ったナビゲーションメニューで、タップ・クリックすると操作項目が出現するものを指します。 3本線のデザインがハンバーガーの形に見えることに由来します。"
          link="https://www.youtube.com/"
          site="youtube"
          position="bottom"
        >
          <Burger
            size="md"
            opened={!toggle}
            onClick={() => setToggle(!toggle)}
          />
        </SpeechBubble>
      </div>
      <ul className="space-y-1">
        {data.map((item) => {
          return (
            <li key={item.label} className={listStyle}>
              <Link href={item.link} className="flex">
                {item.icon}
                {toggle ? null : item.label}
                {/* {!opened && item.label} */}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr className="w-4/5" />
      <ul className="space-y-1">
        {login.map((item) => {
          return (
            <li key={item.label} className={listStyle}>
              <Link href={item.link} className="flex">
                {item.icon}
                {toggle ? null : item.label}
                {/* {!opened && item.label} */}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
