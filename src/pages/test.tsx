import React from "react";
import { Layout } from "src/Layouts/Layout";
import { Modal, ModalChildren } from "src/UI/Modal";

const Test = () => {
  return (
    <Layout>
      <p>ここの文字を見えるようにしたい</p>
      <Modal>
        <ModalChildren
          title="modal"
          body="本文テスト長めああああああ、ここの背景色（白）にはオパシティをかけたくない"
        />
      </Modal>
    </Layout>
  );
};

export default Test;
