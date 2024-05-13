import {
  Checkbox,
  Col,
  Layout,
  Row,
  Progress,
  Space,
} from "antd";
import { CheckboxProps } from "antd/lib";
import styled from "styled-components";
import {
  BtnMobile,
  CustomHeader,
  CustomTitleHeader,
} from "../../styles/styled";
import { useState } from "react";
import ExamModal from "../share/modal/ExamModal";
import { useNavigate } from "react-router-dom";

const { Header, Content} = Layout;
const ContentLeft = styled(Col)`
  /* height: 100vh; */
  background: #d9d9d9;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
const BtnSubmit = styled.button`
  background: #9f9d9f;
  border-radius: 40px;
  padding: 1rem 4rem;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 16px;
`;
const CoverBtnSubmit = styled.div`
  display: flex;
  justify-content: center;
`;
const CoverInfo = styled.div`
  margin: 3rem;
  text-align: center;
`;
const Item = styled.div`
  width: 50%;
  padding: 0.5rem 0;
  border: 1px solid;
  margin: 0.7rem;
`;
const CoverBtnExam = styled(CoverBtnSubmit)`
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const BtnExam = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24.2px;
  text-align: center;
  background: #eee7a9;
  padding: 0.5rem 2rem;
`;
const Title = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: left;
  margin: 2rem 0rem;
`;
const ContentExam = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 2rem;
`;
const AnswerCheckbox = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;
`;
const TitleSubject = styled.div`
  height: 10px;
  /* margin: 25px 0px; */
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin-top: 1rem;
`;
const TimeCountDown = styled.div`
  height: 10px;
  margin: 25px 0px;
`;

const Exam = () => {
  const history = useNavigate();

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const finalExam = () => {
    history("/exam-finish")
  }
  return (
    <>
      {/* <div style={{background: "#c4c4c4", height: "100vh"}}> */}
      <Row>
        <Col span={24} lg={18}>
          <Layout>
            <Header
              style={{
                height: "20vh",
                border: "1px solid black",
                background: "#d9d9d9",
                padding: "0px",
              }}
            >
              <Row>
                <Col span={24} lg={0}>
                  <CustomHeader style={{ textAlign: "center" }}>
                    <Space>
                      <div onClick={showDrawer}>
                        <BtnMobile />
                      </div>
                    </Space>
                    {/* <ContentLeft
                      setOpen={setOpen}
                      open={open}
                      onClose={onClose}
                    /> */}
                    <ExamModal
                      setOpen={setOpen}
                      open={open}
                      onClose={onClose}
                    />
                    <CustomTitleHeader>làm bài thi</CustomTitleHeader>
                  </CustomHeader>
                </Col>
              </Row>
              <div style={{ padding: "0px 50px" }}>
                <TitleSubject>
                  Kiểm tra an toàn bảo mật thông tin lần 2
                </TitleSubject>
                <TimeCountDown>Còn lại: 14 phút 22 giây</TimeCountDown>
                <Progress
                  percent={50}
                  size={["max", 20]}
                  strokeColor="rgba(65, 197, 78, 1)"
                  showInfo={false}
                />
              </div>
            </Header>
            <Content
              style={{
                padding: "0 48px",
                height: "80vh",
                border: "1px solid black",
                background: "#c4c4c4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Title>
                  Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép
                  (có hưởng lương) bao nhiêu ngày một năm?
                </Title>
                <ContentExam>
                  <div>
                    <Checkbox onChange={onChange}>
                      <AnswerCheckbox>
                        A. 12 ngày nếu làm đủ cả năm
                      </AnswerCheckbox>
                    </Checkbox>
                  </div>
                  <Checkbox onChange={onChange}>
                    <AnswerCheckbox>
                      B. 16 ngày nếu làm đủ cả năm
                    </AnswerCheckbox>
                  </Checkbox>
                  <Checkbox onChange={onChange}>
                    <AnswerCheckbox>
                      C. Không có nghỉ phép vẫn hưởng lương
                    </AnswerCheckbox>
                  </Checkbox>
                  <Checkbox onChange={onChange}>
                    <AnswerCheckbox>D. 8 ngày nếu làm đủ cả năm</AnswerCheckbox>
                  </Checkbox>
                </ContentExam>
              </div>
              <CoverBtnExam>
                <BtnExam>Câu trước</BtnExam>
                <BtnExam>Câu sau</BtnExam>
              </CoverBtnExam>
            </Content>
          </Layout>
        </Col>
        <ContentLeft span={0} lg={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CoverInfo>
              <Row>
                <Col span={0} md={5}>
                  <Item>1</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>2</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>3</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>4</Item>
                </Col>
                <Col span={0} md={4}>
                  <Item>5</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>6</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>7</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>8</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>9</Item>
                </Col>
                <Col span={0} md={4}>
                  <Item>10</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>11</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>12</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>13</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>14</Item>
                </Col>
                <Col span={0} md={4}>
                  <Item>15</Item>
                </Col>
                <Col span={0} md={5}>
                  <Item>16</Item>
                </Col>
              </Row>
            </CoverInfo>
            <CoverBtnSubmit>
              <BtnSubmit onClick={finalExam}>Nộp bài</BtnSubmit>
            </CoverBtnSubmit>
          </div>
        </ContentLeft>
      </Row>
      {/* </div> */}
    </>
  );
};

export default Exam;
