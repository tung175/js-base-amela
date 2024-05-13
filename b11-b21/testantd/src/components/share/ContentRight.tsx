/* eslint-disable react-hooks/exhaustive-deps */
import{ useEffect, useState } from "react";
import {
  Col,
  Layout,
  Row,
  Space,
  message,
  Select,

} from "antd";
import { SearchProps } from "antd/es/input";
import time from "../../assets/time.png";
import point from "../../assets/image 4.png";
import {
  BtnMobile,
  CustomChildContent,
  CustomContent,
  CustomExamTitle,
  CustomFooter,
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
  DifficultQuestion,
} from "../../styles/styled";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Question, questions } from "../../data/contants";
import { t } from "i18next";
import star2 from "../../assets/Star 4.svg";
import star1 from "../../assets/Star 5.svg";
import "../../styles/custom-select-dropdown.scss";
const { Content } = Layout;

interface IProps {
  showDrawer: () => void;
}
const ContentRight = (props: IProps) => {
  const [pageSize, setPageSize] = useState(6);
  const [listQuestion, setListQuestion] = useState<Question[]>([]);
  const [totalQuestion, setTotalQuestion] = useState<Question[]>(
    questions || []
  );
  const user = useSelector((state: any) => state.user.userAcc);
  const navigate = useNavigate();
  const location = useLocation(); 
  

  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));
  // const searchParams = new URLSearchParams(window.location.search);

  // Sửa đổi dòng này để lấy thông tin từ location
  // const searchParams = new URLSearchParams(location.search);
  const page: string = searchParams.get("pageIndex") || "1";
  const pageNumber: number = parseInt(page);
  const [pageIndex, setPageIndex] = useState<number>(parseInt(page));
  const [textSearch, setTextSearch] = useState<string>(
    searchParams.get("search-text") || ""
  );
  const [selectItem, setSelectItem] = useState<string>(
    searchParams.get("item") || "0"
  )

  const handleChange = (value: string | number) => {
    // const selectedValue = typeof value === "number" ? value.toString() : value;
    console.log(textSearch);
    navigate(`/dashboard?pageIndex=${1}&item=${value}&search=${textSearch}`);
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    if (user && user.auth === false) {
      navigate("/login");
      message.success("logout success");
    }
  }, [user]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSearchParams(new URLSearchParams(location.search));
    setTextSearch(searchParams.get("search") || "");
    setSelectItem(searchParams.get("item") || "0");
  }, [window.location.search]);

  useEffect(() => {
    // setTextSearch(searchParams.get("search") || "");
    // setSelectItem(searchParams.get("item") || "0");
    if (searchParams.get("item") === "0" || !searchParams.get("item")) {
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
    const updatedListQuestion = [...totalQuestion].slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
    // console.log(updatedListQuestion);
    setListQuestion([...updatedListQuestion]);
  }, [totalQuestion]);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <>
        <Col span={24} md={19}>
          <CustomLayout>
            <Row>
              <Col span={24} md={0}>
                <CustomHeader style={{ textAlign: "center" }}>
                  <Space>
                    <div onClick={props.showDrawer}>
                      <BtnMobile />
                    </div>
                  </Space>
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
                    <Select
                      value={searchParams.get("item") || selectItem}
                      className="custom-select-dropdown"
                      onChange={handleChange}
                      options={[
                        {
                          value: "0",
                          label: (
                            <DifficultQuestion>
                              All Difficult
                              <img
                                src={star2}
                                width={30}
                                height={30}
                                alt="Achieve"
                              />
                            </DifficultQuestion>
                          ),
                        },
                        {
                          value: "1",
                          label: (
                            <DifficultQuestion>
                              Độ khó 1
                              <img
                                src={star2}
                                width={30}
                                height={30}
                                alt="Achieve"
                              />
                            </DifficultQuestion>
                          ),
                        },
                        {
                          value: "2",
                          label: (
                            <DifficultQuestion>
                              Độ khó 2
                              <img
                                src={star2}
                                width={30}
                                height={30}
                                alt="Achieve"
                              />
                            </DifficultQuestion>
                          ),
                        },
                        {
                          value: "3",
                          label: (
                            <DifficultQuestion>
                              Độ khó 3
                              <img
                                src={star2}
                                width={30}
                                height={30}
                                alt="Achieve"
                              />
                            </DifficultQuestion>
                          ),
                        },
                        {
                          value: "4",
                          label: (
                            <DifficultQuestion>
                              Độ khó 4
                              <img
                                src={star2}
                                width={30}
                                height={30}
                                alt="Achieve"
                              />
                            </DifficultQuestion>
                          ),
                        },
                        {
                          value: "5",
                          label: (
                            <DifficultQuestion>
                              Độ khó 5
                              <img
                                src={star2}
                                width={30}
                                height={30}
                                alt="Achieve"
                              />
                            </DifficultQuestion>
                          ),
                        },
                      ]}
                    />
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
                          <CustomRank>
                            {Array.from({ length: item.level + 1 }).map(
                              (_, index) => (
                                <img
                                  key={index}
                                  src={star2}
                                  width={30}
                                  height={30}
                                  alt="Achieve"
                                />
                              )
                            )}
                            {Array.from({ length: 4 - item.level }).map(
                              (_, index) => (
                                <img
                                  key={index}
                                  src={star1}
                                  width={30}
                                  height={30}
                                  alt="Achieve"
                                />
                              )
                            )}
                          </CustomRank>
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
    </>
  );
};

export default ContentRight;
