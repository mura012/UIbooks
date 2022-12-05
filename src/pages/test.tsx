import { Sidebar } from "src/components/Sidebar";
import { Layout } from "src/Layouts/Layout";
import { Accordion, AccordionWrapper } from "src/UI/Accordion";
import { DatePick } from "src/UI/DatePick";
import { Modal, ModalChildren } from "src/UI/Modal";
import { Radio } from "src/UI/Radio";
import { Rating } from "src/UI/Rating";

const Test = () => {
  return (
    <>
      <Layout>
        <Sidebar />
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
          <DatePick />
        </div>
      </Layout>
      <Radio radioLabel={["test", "test2", "test3"]} />
    </>
  );
};

export default Test;
