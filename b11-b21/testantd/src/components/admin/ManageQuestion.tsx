import { Breadcrumb, Col, Input, Layout, Row } from "antd";
import {
  ContentListUser,
  CustomBtnAdd,
  CustomFooter,
  CustomIconAdd,
  CustomInputSearch,
  CustomListUser,
  CustomPaginate,
  TotalAccount,
} from "../../styles/styled";
import Edit from "../../assets/Vector.png";
import Delete from "../../assets/delete.png";
import Add from "../../assets/Add 1.png";
import { SearchProps } from "antd/es/input";
import { useState } from "react";
import EditQuestionModal from "../share/modal/EditQuestionModal";
const { Search } = Input;
const { Header, Content, Footer } = Layout;

const ManageQuestion = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Question manager</Breadcrumb.Item>
          <Breadcrumb.Item>Đảm bảo chất lượng phần mềm</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Row>
            <Col span={18} sm={18}>
              <CustomInputSearch
                size="large"
                placeholder="Search "
                onSearch={onSearch}
                style={{ margin: "25px 0" }}
              />
            </Col>
            <Col span={0} sm={6}>
              <CustomBtnAdd >
                <CustomIconAdd src={Add}></CustomIconAdd>
                <span>New Question</span>
              </CustomBtnAdd>
            </Col>
            <Col span={6} sm={0}>
              <CustomBtnAdd onClick={showModal}>
                <CustomIconAdd src={Add}></CustomIconAdd>
              </CustomBtnAdd>
            </Col>
            <TotalAccount>Tổng số câu hỏi: </TotalAccount>
          </Row>
        </div>
        <CustomListUser>
          <ContentListUser>
            <div>
              <div>Đâu không là phương pháp kiểm thử hộp đen:</div>
              <div>A: Phân vùng tương đương</div>
              <div>B: Bảng quyết định</div>
              <div>C: Unit test</div>
              <div>D: Lược đồ chuyển trạng</div>
            </div>
            <div>
              <img src={Edit} style={{ marginRight: "30px" }} onClick={showModal}/>
              <img src={Delete} />
            </div>
          </ContentListUser>
          <ContentListUser>
            <div>
              <div>Đâu không là phương pháp kiểm thử hộp đen:</div>
              <div>A: Phân vùng tương đương</div>
              <div>B: Bảng quyết định</div>
              <div>C: Unit test</div>
              <div>D: Lược đồ chuyển trạng</div>
            </div>
            <div>
              <img src={Edit} style={{ marginRight: "30px" }} />
              <img src={Delete} />
            </div>
          </ContentListUser>
          <ContentListUser>
            <div>
              <div>Đâu không là phương pháp kiểm thử hộp đen:</div>
              <div>A: Phân vùng tương đương</div>
              <div>B: Bảng quyết định</div>
              <div>C: Unit test</div>
              <div>D: Lược đồ chuyển trạng</div>
            </div>
            <div>
              <img src={Edit} style={{ marginRight: "30px" }} />
              <img src={Delete} />
            </div>
          </ContentListUser>
        </CustomListUser>
      </Content>
      <CustomFooter style={{ textAlign: "center" }}>
        <CustomPaginate
          total={60}
          defaultPageSize={6}
          defaultCurrent={1}
          // simple={true}
        />
      </CustomFooter>
      <EditQuestionModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default ManageQuestion;
