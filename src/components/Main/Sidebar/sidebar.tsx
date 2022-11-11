import React, { useState } from "react";
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
} from "@tabler/icons";
import Link from "next/link";
import { Burger } from "@mantine/core";

type Data = {
  link: string;
  label: string;
  icon: any;
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

export const Sidebar = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const listStyle =
    "p-1.5 opacity-50 hover:rounded-full hover:bg-green-500 hover:opacity-100 flex cursor-pointer";

  return (
    <aside className="flex flex-col items-start  bg-red-100 transition-all">
      <div className="flex justify-start">
        <Burger
          size="md"
          opened={opened}
          className="opacity-50"
          onClick={() => setOpened(opened ? false : true)}
        />
      </div>
      <ul className="space-y-4">
        <div>
          {opened
            ? data.map((item) => {
                return (
                  <li key={item.label} className={listStyle}>
                    <Link href={item.link} className="flex">
                      {item.icon}
                    </Link>
                  </li>
                );
              })
            : data.map((item) => {
                return (
                  <li key={item.label} className={listStyle}>
                    <Link href={item.link} className="flex">
                      {item.icon}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
        </div>
        <hr className="w-4/5 " />
        <div className="mb-4 flex flex-col items-start ">
          <li>
            <Link href="/" className={listStyle}>
              <IconSwitchHorizontal className="cursor-pointer" />
              {opened ? null : "Change account"}
            </Link>
          </li>
          <li>
            <Link href="/login" className={listStyle}>
              <IconLogout />
              {opened ? null : "Login"}
            </Link>
          </li>
        </div>
      </ul>
    </aside>
  );
};
