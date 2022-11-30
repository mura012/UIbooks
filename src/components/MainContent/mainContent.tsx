import React from "react";
import { Badge, BadgeWrapper } from "src/UI/Badge";
import { Modal, ModalChildren } from "src/UI/Modal";

export const MainContent = () => {
  return (
    <main className="grow bg-green-100">
      <Modal>
        <ModalChildren title="children" body="ほんぶんあああああ" />
      </Modal>
      <BadgeWrapper>
        <Badge bw="white">バッチ</Badge>
        <Badge color="red">バッチ2</Badge>
      </BadgeWrapper>
    </main>
  );
};
