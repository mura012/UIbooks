import { IconChevronRight } from "@tabler/icons";
import { useToggle } from "src/Fooks/useToggle";

type Props = {
  buttonText: string;
  text: string;
};

export const Accordion = ({ buttonText, text }: Props) => {
  const { toggle, handleToggle } = useToggle();
  return (
    <div className="min-w-max">
      <div className="flex hover:bg-gray-200" onClick={handleToggle}>
        <p
          style={
            toggle
              ? { transform: "rotate(0.25turn)", transition: "all 0.3s" }
              : { transition: "all 0.3s" }
          }
        >
          <IconChevronRight />
        </p>
        <p className="ml-4">{buttonText}</p>
      </div>
      <p> {toggle ? text : ""} </p>
    </div>
  );
};
