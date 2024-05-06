import { Breadcrumb, Col, Layout, Row, Space, Table, Tag } from "antd";
import { Input, TableProps } from "antd/lib";
import { IManageQuiz } from "../../types/type.quiz";
import {
  CustomBtnAdd,
  CustomIconAdd,
  CustomInputSearch,
  CustomMainContent,
} from "../../styles/styled";
import { SearchProps } from "antd/es/input";
import Edit from "../../assets/Vector.png";
import Delete from "../../assets/delete.png";
import Add from "../../assets/Add 1.png";
import styled from "styled-components";

const { Search } = Input;
const { Header, Content, Footer } = Layout;

const CustomTableList = styled(Table)`
  .ant-table-wrapper .ant-table-thead > tr > th,
  .ant-table-wrapper .ant-table-thead > tr > td {
    background: Red;
  }
`;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const columns: TableProps<IManageQuiz>["columns"] = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text) => <a>{text}</a>,
    responsive: ["sm"],
  },
  {
    title: "Test Name",
    dataIndex: "testName",
    key: "testName",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Start",
    key: "start",
    dataIndex: "start",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space>
        <img
          src={Edit}
          style={{ marginRight: "10px", width: " 20px", height: "20px" }}
        />
        <img src={Delete} style={{ width: " 20px", height: "20px" }} />
      </Space>
    ),
  },
];

const data: IManageQuiz[] = [
  {
    key: "1",
    stt: 1,
    testName: "bài toán 2",
    time: "7m",
    start: 4,
  },
  {
    key: "2",
    stt: 2,
    testName: "bài toán 3",
    time: "7m",
    start: 4,
  },
  {
    key: "3",
    stt: 3,
    testName: "bài toán 4",
    time: "7m",
    start: 4,
  },
];

const ManageQuiz = () => {
  return (
    <>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Test Manager</Breadcrumb.Item>
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
              <CustomBtnAdd>
                <CustomIconAdd src={Add}></CustomIconAdd>
                <span>New Test</span>
              </CustomBtnAdd>
            </Col>
            <Col span={6} sm={0}>
              <CustomBtnAdd>
                <CustomIconAdd src={Add}></CustomIconAdd>
              </CustomBtnAdd>
            </Col>
          </Row>
        </div>
        <CustomMainContent style={{ padding: "24px 20px" }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="small"
            scroll={{ x: true }}
          />
        </CustomMainContent>
      </Content>
    </>
  );
};

export default ManageQuiz;
