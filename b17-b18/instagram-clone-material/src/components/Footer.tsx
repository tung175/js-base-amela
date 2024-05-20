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
const drawerWidth = 320;
const Footer = () => {
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
            <ListItem
              alignItems="flex-start"
              secondaryAction={<a href="#"> Theo dõi</a>}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="ngw_vieht" secondary={"Gợi ý cho bạn"} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={<a href="#"> Theo dõi</a>}
            >
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText primary="ng.oc90" secondary={"Gợi ý cho bạn"} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={<a href="#"> Theo dõi</a>}
            >
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText primary="changcheng_1505" secondary={"Gợi ý cho bạn"} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={<a href="#"> Theo dõi</a>}
            >
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText primary="phuongnam2001" secondary={"Gợi ý cho bạn"} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={<a href="#"> Theo dõi</a>}
            >
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText primary="luonghieu2603" secondary={"Gợi ý cho bạn"} />
            </ListItem>
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
