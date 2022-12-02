import { ReactNode } from "react";
import { useToggle } from "src/Fooks/useToggle";
import { SpeechBubble } from "src/Layouts/SpeechBubble";

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
  const { toggle, handleOpen, handleCloce } = useToggle();

  return (
    <>
      <button onClick={handleOpen}>{openButton}</button>
      <div
        style={toggle ? { display: "flex" } : { display: "none" }}
        className="absolute top-0 left-0 z-[999] h-screen w-full flex-col items-center justify-center bg-gray-300/50"
      >
        <SpeechBubble
          title="モーダルウィンドウ"
          text="操作が完了するまで親ウィンドウへの操作を受け付けなくさせるタイプのウィンドウ。"
          position="bottom"
        >
          <div className="rounded-md bg-white p-12 opacity-100 shadow-sm">
            {children}
            <div className="w-full space-x-3 rounded-3xl text-right">
              <button onClick={handleCloce}>{cancelButton}</button>
              <button onClick={handleCloce}>{okButton}</button>
            </div>
          </div>
        </SpeechBubble>
      </div>
    </>
  );
};
