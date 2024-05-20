import {
    Avatar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Toolbar,
    Typography,
  } from "@mui/material";
  
  const drawerWidth = 320;
  const Account = () => {
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
                paddingTop: 5,
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
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="01.td.05.17"
                  secondary={"Nguyen Ninh Tung Duong"}
                />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </>
    );
  };
  
  export default Account;
  