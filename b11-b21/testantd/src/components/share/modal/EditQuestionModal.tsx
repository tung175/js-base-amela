import {Col, Modal, Radio, Row } from "antd";
import styled from "styled-components";

interface IProps {
  handleOk: () => void;
  isModalOpen: boolean;
  handleCancel: () => void;
}

const CustomModal = styled(Modal)`
  width: 1000px;
  height: 600px;
  &.ant-modal .ant-modal-content {
    background-color: pink;
  }
  &.ant-modal .ant-modal-footer {
    display: flex;
    justify-content: space-around;
  }
`;

const CustomBtnUpdate = styled.button`
  padding: 15px 30px;
  font-weight: 700;
`;

const CustomColModalLeft = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 20px;
`;

const CustomQuestion = styled.div`
  border: 1px solid;
  padding: 0px 10px;
  text-align: center;
  background: rgba(243, 241, 241, 1);
  font-family: Inter;
  font-size: 24px;
  margin-bottom: 30px;
`;

const CustomTitleQuestion = styled(CustomQuestion)`
  font-weight: 700;
  padding: 0px;
`;

const CustomAnswer = styled(CustomQuestion)`
  font-size: 18px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const CustomDetailAnswer = styled(CustomAnswer)`
  text-align: left;
`;

const CustomRadioAnswer = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
`;
const EditQuestionModal = (props: IProps) => {
  const { isModalOpen } = props;
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <CustomModal
        width={1000}
        closable={false}
        open={isModalOpen}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CustomBtnUpdate onClick={props.handleCancel}>Cancel</CustomBtnUpdate>
            <CustomBtnUpdate>Update</CustomBtnUpdate>
          </>
        )}
      >
        <Row>
          <CustomColModalLeft span={6}>
            <CustomQuestion>Câu hỏi</CustomQuestion>
            <CustomAnswer>A</CustomAnswer>
            <CustomAnswer>B</CustomAnswer>
            <CustomAnswer>C</CustomAnswer>
            <CustomAnswer>D</CustomAnswer>
          </CustomColModalLeft>
          <Col span={18}>
            <CustomTitleQuestion>
              Đâu không phải phương pháp kiểm thử hộp đen?
            </CustomTitleQuestion>
            <CustomDetailAnswer>Phân vùng tương đương</CustomDetailAnswer>
            <CustomDetailAnswer>Bảng quyết định</CustomDetailAnswer>
            <CustomDetailAnswer>Unit test</CustomDetailAnswer>
            <CustomDetailAnswer>Lược đồ chuyển trạng</CustomDetailAnswer>
          </Col>
        </Row>
        <CustomRadioAnswer>
          <span>Đáp án đúng: </span>
          <Radio.Group defaultValue={1} size="large">
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </CustomRadioAnswer>
      </CustomModal>
    </>
  );
};

export default EditQuestionModal;
