import { useState } from "react";
import { ChangeEvent } from "src/types/event";

type Props = {
  radioLabel: string[];
};

export const Radio = ({ radioLabel }: Props) => {
  const handleChange = (e: ChangeEvent) => setValue(e.target.value);
  const [value, setValue] = useState<string>(radioLabel[0]);

  return (
    <>
      {radioLabel.map((item) => {
        return (
          <label key={item}>
            <input
              type="radio"
              value={item}
              checked={value === item}
              onChange={handleChange}
            />
            {item}
          </label>
        );
      })}
    </>
  );
};
