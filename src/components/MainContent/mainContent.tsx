import React from "react";
import { Badge } from "src/UI/Badge";
import { Modal, ModalChildren } from "src/UI/Modal";

export const MainContent = () => {
  return (
    <main className="grow bg-green-100">
      <Modal>
        <ModalChildren title="children" body="ほんぶんあああああ" />
      </Modal>
      <Badge bw="white">バッチ</Badge>
    </main>
  );
};
