import { IconCircle } from "@tabler/icons";
import { SpeechBubble } from "src/Layouts/SpeechBubble";
import { useFocus } from "src/context/focusContext";

const toggleAll = "flex w-14 p-0 rounded-2xl bg-white items-center";
const toggleOn = toggleAll + " justify-start";
const toggleOff = toggleAll + " justify-end";

export const ToggleButton = () => {
  const [focus, setFocus] = useFocus();
  const handleToggle = () => {
    setFocus((prev: boolean) => !prev);
  };
  return (
    <SpeechBubble
      title="トグルボタン"
      text="オンのときに押すとオフに、オフのときに押すとオンになるボタンやスイッチのこと。メディアプレーヤーの再生ボタンなどによく見られる。"
      position="bottom"
    >
      <button className={focus ? toggleOn : toggleOff} onClick={handleToggle}>
        <p>{!focus && "On"}</p>
        {focus ? (
          <IconCircle color="blue" stroke={3} />
        ) : (
          <IconCircle color="red" stroke={3} />
        )}
        <p>{focus && "Off"}</p>
      </button>
    </SpeechBubble>
  );
};
