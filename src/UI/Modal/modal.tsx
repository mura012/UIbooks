import React, { ReactNode, useState } from "react";
import { SpeechBubble } from "src/Layouts/SpeechBubble";
import { ClickEvent } from "src/types/event";

type Props = {
  children: ReactNode;
  openButton?: string;
  okButton?: string;
  cancelButton?: string;
};

export const Modal = ({
  children,
  openButton = "Open",
  okButton = "OK",
  cancelButton = "Cancel",
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloce = (e: ClickEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <SpeechBubble
      title="モーダルウィンドウ"
      text="操作が完了するまで親ウィンドウへの操作を受け付けなくさせるタイプのウィンドウ。"
      position="bottom"
    >
      <button onClick={handleOpen}>{openButton}</button>
      <div
        style={open ? { display: "flex" } : { display: "none" }}
        className="absolute top-0 left-0 z-[999] h-screen w-full flex-col items-center justify-center bg-gray-400 opacity-50 "
      >
        <div className="rounded-md bg-white opacity-100 shadow-sm">
          {children}
          <div className="w-full space-x-3 rounded-3xl text-right">
            <button onClick={handleCloce}>{cancelButton}</button>
            <button onClick={handleCloce}>{okButton}</button>
          </div>
        </div>
      </div>
    </SpeechBubble>
  );
};
