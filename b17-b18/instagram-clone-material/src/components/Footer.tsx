import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/Footer.scss";
import { useEffect, useState } from "react";
const drawerWidth = 320;
const Footer = () => {
  const [listSuggest, setListSuggest] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response: any) => response.json())
      .then((data) => setListSuggest(data.data));
  }, []);
  console.log(listSuggest);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#fff",
              // paddingTop: 5,
              paddingBottom: 5,
              justifyContent: "space-between",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem
              alignItems="flex-start"
              secondaryAction={<a href="#"> Chuyển</a>}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="01.td.05.17"
                secondary={"Nguyen Ninh Tung Duong"}
              />
            </ListItem>
            <div className="title-suggest-user">
              <span>Gợi ý cho bạn</span>
              <a href="#">Xem thêm</a>
            </div>
            {listSuggest &&
              listSuggest.length > 0 &&
              listSuggest.map((item: any, index) => {
                return (
                  <>
                    <ListItem
                    key={item.id}
                      alignItems="flex-start"
                      secondaryAction={<a href="#"> Theo dõi</a>}
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src={item.avatar}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.first_name + "_" + item.last_name}
                        secondary={"Gợi ý cho bạn"}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })}
          </List>
          <Toolbar>
            <Typography
              variant="caption"
              color="textSecondary"
              align="center"
              style={{ width: "100%" }}
            >
              Giới thiệu Trợ giúp Báo chí API Việc làm Quyền riêng tư Điều khoản
              Vị trí Ngôn ngữ Meta đã xác minh
              <br />© 2024 INSTAGRAM FROM META
            </Typography>
          </Toolbar>
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>Here is the main content.</Typography>
      </Box>
    </>
  );
};

export default Footer;
