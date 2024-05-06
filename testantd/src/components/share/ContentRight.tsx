import React, { useEffect, useState } from "react";
import type { DrawerProps, PaginationProps, RadioChangeEvent } from "antd";
import {
  CaretDownOutlined,
  DownOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Col,
  Drawer,
  Layout,
  Menu,
  Radio,
  Row,
  Space,
  theme,
  Input,
  Dropdown,
  message,
  Pagination,
} from "antd";
import { SearchProps } from "antd/es/input";
import styled from "styled-components";
import { MenuProps } from "antd/lib";
import time from "../../assets/time.png";
import start from "../../assets/star.png";
import point from "../../assets/image 4.png";
import ContentLeft from "./ContentLeft";
import avt from "../../assets/avata.png";
import {
  Avt,
  BtnMobile,
  CustomChildContent,
  CustomContent,
  CustomDrawerContent,
  CustomDropdownSpace,
  CustomExamTitle,
  CustomFooter,
  CustomFooterAvt,
  CustomHeader,
  CustomImg,
  CustomInputSearch,
  CustomLayout,
  CustomMainContent,
  CustomPaginate,
  CustomRank,
  CustomRowContent,
  CustomRowMainContent,
  CustomTitleHeader,
  CustomUserInfo,
} from "../../styles/styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleLogoutRedux } from "../../redux/actions/UserAction";
import { toast } from "react-toastify";
import { Question, questions } from "../../data/contants";
import { t } from "i18next";

const { Search } = Input;
const { Header, Content, Footer } = Layout;
// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const CustomBtnLogout = styled.button`
  border-radius: 4px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  border: 1px solid #00000080;
  align-items: center;
  padding: 20px 50px;
  display: flex;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ContentRight: React.FC = () => {
  const [pageSize, setPageSize] = useState(6);
  const [listQuestion, setListQuestion] = useState<Question[]>(questions);
  const [totalQuestion, setTotalQuestion] = useState<Question[]>(
    questions || []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const user = useSelector((state: any) => state.user.userAcc);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  // const searchParams = useSearchParams();
  const searchParams = new URLSearchParams(window.location.search);
  const page: string = searchParams.get("pageIndex") || "1";
  const pageNumber: number = parseInt(page);
  const [pageIndex, setPageIndex] = useState<number>(parseInt(page));
  const [textSearch, setTextSearch] = useState<string>(
    searchParams.get("search-text") || ""
  );
  const [selectItem, setSelectItem] = useState<string>(
    searchParams.get("item") || "0"
  );
  const handleLogout = () => {
    dispatch(handleLogoutRedux());
  };
  // useEffect(() => {
  //   if (user && user.auth === false) {
  //     navigate("/login");
  //     message.success("logout success");
  //   }
  // }, [user]);
  useEffect(() => {
    console.log("1");
    setTextSearch(searchParams.get("search") || "");
    setSelectItem(searchParams.get("item") || "0");
    if (searchParams.get("item") == "0" || !searchParams.get("item")) {
      setTotalQuestion(
        questions.filter((e) =>
          e.topic.includes(searchParams.get("search") || "")
        )
      );
    } else {
      setTotalQuestion(
        questions.filter(
          (e) =>
            e.topic.includes(searchParams.get("search") || "") &&
            e.level === parseInt(searchParams.get("item") || "1") - 1
        )
      );
    }
    setPageIndex(1);
  }, [textSearch, selectItem, searchParams]);
  useEffect(() => {
    const updatedListQuestion = totalQuestion.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
    setListQuestion(updatedListQuestion);
  }, [totalQuestion, pageNumber, searchParams]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Row>
        <Col span={0} md={5} style={{ background: "#d9d9d9" }}>
          <CustomUserInfo>
            <Avt></Avt>
            {user && user.email && (
              <>
                <CustomDrawerContent>User: {user.email}</CustomDrawerContent>
                <CustomDrawerContent>Point: 100</CustomDrawerContent>
              </>
            )}
          </CustomUserInfo>
          <CustomFooterAvt>
            <CustomBtnLogout onClick={() => handleLogout()}>
              LOGOUT
            </CustomBtnLogout>
          </CustomFooterAvt>
        </Col>
        <Col span={24} md={19}>
          <CustomLayout>
            <Row>
              <Col span={24} md={0}>
                <CustomHeader style={{ textAlign: "center" }}>
                  <Space>
                    <div onClick={showDrawer}>
                      <BtnMobile />
                    </div>
                    {/* <Button type="primary" onClick={showDrawer}>
                      Open
                    </Button> */}
                  </Space>
                  <ContentLeft
                    setOpen={setOpen}
                    open={open}
                    onClose={onClose}
                  />
                  <CustomTitleHeader>Dashboard</CustomTitleHeader>
                </CustomHeader>
              </Col>
            </Row>
            <Content style={{ padding: "0 48px" }}>
              <div>
                <Row>
                  <Col span={24} sm={18}>
                    <CustomInputSearch
                      size="large"
                      placeholder="Search "
                      onSearch={onSearch}
                      style={{ margin: "25px 0" }}
                      value={searchParams.get("search") || textSearch}
                      onChange={(e) => {
                        setTextSearch(e.target.value);
                        navigate(
                          `/dashboard?pageIndex=${1}&item=${selectItem}&search=${
                            e.target.value
                          }`
                        );
                      }}
                      alt="search"
                    />
                  </Col>
                  <Col span={0} sm={6}>
                    <Dropdown menu={menuProps}>
                      <CustomDropdownSpace>
                        <span>Difficult</span>
                        <CaretDownOutlined />
                      </CustomDropdownSpace>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <CustomMainContent>
                <CustomRowMainContent
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                  {listQuestion &&
                    listQuestion.length > 0 &&
                    listQuestion.map((item, index) => {
                      return (
                        <CustomRowContent
                          className="gutter-row"
                          span={24}
                          md={10}
                          key={index}
                          onClick={(e) => {
                            navigate("/exam?index=" + item.id);
                          }}
                        >
                          <CustomExamTitle>{item.topic}</CustomExamTitle>
                          <CustomContent>
                            <CustomChildContent>
                              <CustomImg src={time}></CustomImg>
                              {item.time} {t("minutes")}
                            </CustomChildContent>
                            <CustomChildContent>
                              <CustomImg src={point}></CustomImg>
                              {item.points}/250 {t("points")}
                            </CustomChildContent>
                          </CustomContent>
                          <CustomRank></CustomRank>
                        </CustomRowContent>
                      );
                    })}
                </CustomRowMainContent>
              </CustomMainContent>
            </Content>
            <CustomFooter style={{ textAlign: "center" }}>
              <CustomPaginate
                total={totalQuestion.length}
                defaultPageSize={6}
                defaultCurrent={1}
                pageSize={6}
                pageSizeOptions={[6, 12, 20]}
                current={parseInt(searchParams.get("pageIndex") || "1")}
                onChange={(index, size) => {
                  setPageIndex(index);
                  navigate(
                    `/dashboard?pageIndex=${index}&item=${selectItem}&search=${textSearch}`
                  );
                }}
                // simple={true}
              />
            </CustomFooter>
          </CustomLayout>
        </Col>
      </Row>
    </>
  );
};

export default ContentRight;
