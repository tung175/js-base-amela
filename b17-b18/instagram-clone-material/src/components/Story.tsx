import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const stories = [
  //   { id: 1, username: 'user1', avatar: {av1} },
  { id: 2, username: "user2", avatar: "/assets/IMG_2453.jpg" },
  { id: 3, username: "user3", avatar: "/static/images/avatar/3.jpg" },
  { id: 4, username: "user4", avatar: "/static/images/avatar/4.jpg" },
  { id: 5, username: "user1", avatar: "/static/images/avatar/1.jpg" },
  { id: 6, username: "user2", avatar: "/static/images/avatar/2.jpg" },
  { id: 7, username: "user3", avatar: "/static/images/avatar/3.jpg" },
  { id: 8, username: "user4", avatar: "/static/images/avatar/4.jpg" },
  { id: 9, username: "user1", avatar: "/static/images/avatar/1.jpg" },
  { id: 10, username: "user2", avatar: "/static/images/avatar/2.jpg" },
  { id: 11, username: "user3", avatar: "/static/images/avatar/3.jpg" },
  { id: 12, username: "user4", avatar: "/static/images/avatar/4.jpg" },
];

const Story = () => {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response: any) => response.json())
      .then((data: any) => setListUser(data.users));
  }, []);
  // console.log(listUser);

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "scroll",
        p: 2,
        borderBottom: "1px solid #ddd",
      }}
    >
      {listUser.map((item: any) => (
        <Box key={item.id} sx={{ textAlign: "center", mr: 2 }}>
          <Avatar
            src={item.image}
            sx={{ width: 56, height: 56, border: "2px solid #ff9800" }}
          />
          <Typography variant="caption">{item.username}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Story;
