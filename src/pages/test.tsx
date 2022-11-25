import React from "react";
import { Layout } from "src/Layouts/Layout";
import { Accordion, AccordionWrapper } from "src/UI/Accordion";
import { Modal, ModalChildren } from "src/UI/Modal";
import { Rating } from "src/UI/Rating";

const Test = () => {
  return (
    <Layout>
      <div className="flex flex-row">
        <Modal>
          <ModalChildren
            title="modal"
            body="本文テスト長めああああああ、ここの背景色（白）にはオパシティをかけたくない"
          />
        </Modal>
        <Rating />
        <AccordionWrapper>
          <Accordion buttonText="ボタン" text="中身" />
        </AccordionWrapper>
      </div>
    </Layout>
  );
};

export default Test;
