
import { Box } from "@mui/material";
import Story from "./Story";
import Post from "./Post";

const MainContent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 3, maxWidth: 600, margin: "auto" }}>
        <Story />
        <Post />
      </Box>
    </>
  );
};

export default MainContent;
