import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackgroundExam = styled.div`
  background: #c4c4c4;
  height: 100vh;
  width: auto;
  display: flex;
  align-items: center;
`;

const PopupExam = styled.div`
  background: #d9d9d9;
  margin: 0px auto;
  height: 300px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BtnExamFinish = styled.button`
  background: #9f9d9f;
  border-radius: 40px;
  padding: 1rem;
  width: 10rem;
`;

const CoverBtnExamFinish = styled.div`
  justify-content: center;
  display: flex;
`;

const TitleExamFinish = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 29.05px;
`;

const ContentExamFinish = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
`;
const ExamFinish = () => {
    const navigate = useNavigate()

    const handleBackToDashboard = () => {
        navigate("/dashboard")
    }
  return (
    <>
      <BackgroundExam>
        <PopupExam>
          <Row>
            <Col span={12} style={{ paddingLeft: "1rem" }}>
              <TitleExamFinish>
                Kiểm tra an toàn bảo mật thông tin lần 2
              </TitleExamFinish>
              <ContentExamFinish>Số câu trả lời đúng: </ContentExamFinish>
              <ContentExamFinish>Số câu trả lời sai: </ContentExamFinish>
              <ContentExamFinish>Số câu chưa trả lời: </ContentExamFinish>
              <ContentExamFinish>Tổng số câu hỏi: </ContentExamFinish>
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>Điểm số: </span>
            </Col>
          </Row>
          <CoverBtnExamFinish>
            <BtnExamFinish onClick={handleBackToDashboard}>Dashboard</BtnExamFinish>
          </CoverBtnExamFinish>
        </PopupExam>
      </BackgroundExam>
    </>
  );
};
export default ExamFinish;
