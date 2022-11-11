import React from "react";
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
  const listStyle =
    "p-1.5 opacity-50 hover:rounded-full hover:bg-green-500 hover:opacity-100";
  return (
    <aside className="flex basis-1/5 flex-col items-center justify-between bg-red-100">
      <div>
        <h1>uibooks</h1>
        <ul className="space-y-4">
          {data.map((item) => {
            return (
              <li key={item.label} className={listStyle}>
                <Link href={item.link} className="flex">
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-4 flex flex-col items-start space-y-4 ">
        <div className={listStyle}>
          <IconSwitchHorizontal />
          Change account
        </div>
        <div className={listStyle}>
          <IconLogout />
          Login
        </div>
      </div>
    </aside>
  );
};
