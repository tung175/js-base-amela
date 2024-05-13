import {Modal } from "antd";

const ExamModal = (props: any) => {
  return (
    <>
      <>
        <Modal
          title="Basic Modal"
          open={props.open}
        //   onOk={handleOk}
          onCancel={props.onClose}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    </>
  );
};

export default ExamModal;
