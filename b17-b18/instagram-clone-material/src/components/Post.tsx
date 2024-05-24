import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useEffect, useState } from "react";
import Reel from "./Reel";
import video1 from "../assets/video-homepage.mp4";
// const posts = [
//   {
//     id: 1,
//     username: "user1",
//     avatar: "/static/images/avatar/1.jpg",
//     image: "/static/images/posts/1.jpg",
//     title: "Post Title 1",
//     description: "This is a description of the first post.",
//   },
//   {
//     id: 2,
//     username: "user2",
//     avatar: "/static/images/avatar/2.jpg",
//     image: "/static/images/posts/2.jpg",
//     title: "Post Title 2",
//     description: "This is a description of the second post.",
//   },
// ];

const Post = () => {
  const [listPost, setListPost] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const videos = [video1];
  // const url =
  //   "https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=mrbeast";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "f20c6b69e7mshecd8718f5f292f2p18b423jsn7f4d286da273",
  //     "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
  //   },
  // };
  useEffect(() => {
    // const fetchPost = async () => {
    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // fetchPost()
    const apiKey = " WC91OktmJHMUdTCLZlJDzK0Y4hHwiieNOoEn11D7pcTuogZ6ZB5Q1GkE";
    const query = "mountains";
    const apiURL = `https://api.pexels.com/v1/search?query=${query}&per_page=15`;
    fetch(apiURL, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setListPost(data.photos))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleIconClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 600, mb: 4 }}>
          <CardHeader
            avatar={<Avatar src="" />}
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="abc"
            subheader="September 14, 2024"
          />
          {videos.map((src, index) => (
            <Reel key={index} src={src} />
          ))}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Description
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleIconClick}>
              <FavoriteIcon style={{ color: isFavorite ? 'red' : 'gray' }}/>
            </IconButton>
            <IconButton aria-label="Comment">
              <ModeCommentIcon />
            </IconButton>
            <IconButton aria-label="share">
              <TelegramIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box>
        {listPost.map((item: any) => (
          <Card key={item.id} sx={{ maxWidth: 600, mb: 4 }}>
            <CardHeader
              avatar={<Avatar src={item.photographer_url} />}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.photographer}
              subheader="September 14, 2024"
            />
            <CardMedia
              component="img"
              height="300"
              image={item.src.landscape}
              alt={item.alt}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.alt}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={handleIconClick}>
                <FavoriteIcon style={{ color: isFavorite ? 'red' : 'gray' }}/>
              </IconButton>
              <IconButton aria-label="Comment">
                <ModeCommentIcon />
              </IconButton>
              <IconButton aria-label="share">
                <TelegramIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Post;
