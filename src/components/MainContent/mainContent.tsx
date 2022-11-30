import React from "react";
import { useToggle } from "src/Fooks/useToggle";
import { Modal, ModalChildren } from "src/UI/Modal";
import { ToggleButton } from "src/UI/ToggleButton";

export const MainContent = () => {
  const { toggle, handleToggle } = useToggle();
  return (
    <main className="grow bg-green-100">
      <Modal>
        <ModalChildren title="children" body="ほんぶんあああああ" />
      </Modal>
      <ToggleButton handleToggle={handleToggle} toggle={toggle} />
      {toggle ? "on" : "off"}
    </main>
  );
};
