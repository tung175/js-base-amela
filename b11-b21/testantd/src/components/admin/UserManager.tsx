/* eslint-disable react-hooks/exhaustive-deps */
import { Breadcrumb, Col, Layout, Row } from "antd";
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
import { useEffect, useState } from "react";
import { User, users } from "../../data/contants";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;
const UserManager = () => {
  const [pageSize, setPageSize] = useState(5);
  const [listUser, setListUser] = useState<User[]>(users);
  const [totalUser, setTotalUser] = useState<User[]>(users || []);
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
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("item") === "0" || !searchParams.get("item")) {
      setTotalUser(
        users.filter((e) => e.email.includes(searchParams.get("search") || ""))
      );
    }
    setPageIndex(1);
  }, [textSearch]);

  useEffect(() => {
    const updatedListUser = [...totalUser].slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
    setListUser([...updatedListUser]);
  }, [totalUser]);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>User manager</Breadcrumb.Item>
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
                <span>New user</span>
              </CustomBtnAdd>
            </Col>
            <Col span={6} sm={0}>
              <CustomBtnAdd>
                <CustomIconAdd src={Add}></CustomIconAdd>
              </CustomBtnAdd>
            </Col>
            <TotalAccount>Tổng số tài khoản: 85</TotalAccount>
          </Row>
        </div>
        <CustomListUser>
          {listUser &&
            listUser?.length &&
            listUser.map((item, index) => {
              return (
                <ContentListUser key={index}>
                  <div>
                    <div>Username: {item.email}</div>
                    <div>Name: {item.username}</div>
                  </div>
                  <div>
                    <img src={Edit} style={{ marginRight: "30px" }} alt="" />
                    <img src={Delete} alt="" />
                  </div>
                </ContentListUser>
              );
            })}
        </CustomListUser>
      </Content>
      <CustomFooter style={{ textAlign: "center" }}>
        <CustomPaginate
          total={totalUser.length}
          defaultPageSize={5}
          defaultCurrent={1}
          pageSize={5}
          pageSizeOptions={[6, 12, 20]}
          current={parseInt(searchParams.get("pageIndex") || "1")}
          onChange={(index, size) => {
            setPageIndex(index);
            navigate(
              `/dashboard-admin?pageIndex=${index}&item=${selectItem}&search=${textSearch}`
            );
          }}
        />
      </CustomFooter>
    </>
  );
};

export default UserManager;
