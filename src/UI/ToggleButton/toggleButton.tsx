import { IconCircle } from "@tabler/icons";
import { SpeechBubble } from "src/Layouts/SpeechBubble";
import { ClickEvent } from "src/types/event";

const toggleAll = "flex w-14 p-0 rounded-2xl bg-white items-center";
const toggleOn = toggleAll + " justify-start";
const toggleOff = toggleAll + " justify-end";

type Toggle = {
  handleToggle: ClickEvent;
  toggle: boolean;
};

export const ToggleButton = ({ handleToggle, toggle }: Toggle) => {
  return (
    <SpeechBubble
      title="トグルボタン"
      text="オンのときに押すとオフに、オフのときに押すとオンになるボタンやスイッチのこと。メディアプレーヤーの再生ボタンなどによく見られる。"
      position="bottom"
    >
      <button className={toggle ? toggleOn : toggleOff} onClick={handleToggle}>
        <p>{!toggle && "On"}</p>
        {toggle ? (
          <IconCircle color="red" stroke={3} />
        ) : (
          <IconCircle color="blue" stroke={3} />
        )}
        <p>{toggle && "Off"}</p>
      </button>
    </SpeechBubble>
  );
};
