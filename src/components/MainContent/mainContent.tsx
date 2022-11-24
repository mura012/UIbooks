import React from "react";
import { Modal, ModalChildren } from "src/UI/Modal";

export const MainContent = () => {
  return (
    <main className="grow bg-green-100">
      <Modal>
        <ModalChildren title="children" body="ほんぶんあああああ" />
      </Modal>
    </main>
  );
};
