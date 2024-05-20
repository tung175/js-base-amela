
import { Avatar, Box, Typography } from '@mui/material';
import av1 from "../assets/IMG_2453.jpg"
import av2 from "../assets/IMG_2454.jpg"
import av3 from "../assets/IMG_2455.jpg"
import av4 from "../assets/IMG_2456.jpg"
import av5 from "../assets/IMG_2457.jpg"
import av6 from "../assets/IMG_2458.jpg"
import av7 from "../assets/IMG_2460.jpg"
import av8 from "../assets/IMG_2461.jpg"
import av9 from "../assets/IMG_2462.jpg"
import av10 from "../assets/IMG_2463.jpg"
import av11 from "../assets/IMG_2464.jpg"
import av12 from "../assets/IMG_2465.jpg"

const stories = [
//   { id: 1, username: 'user1', avatar: {av1} },
  { id: 2, username: 'user2', avatar: '/assets/IMG_2453.jpg' },
  { id: 3, username: 'user3', avatar: '/static/images/avatar/3.jpg' },
  { id: 4, username: 'user4', avatar: '/static/images/avatar/4.jpg' },
  { id: 5, username: 'user1', avatar: '/static/images/avatar/1.jpg' },
  { id: 6, username: 'user2', avatar: '/static/images/avatar/2.jpg' },
  { id: 7, username: 'user3', avatar: '/static/images/avatar/3.jpg' },
  { id: 8, username: 'user4', avatar: '/static/images/avatar/4.jpg' },
  { id: 9, username: 'user1', avatar: '/static/images/avatar/1.jpg' },
  { id: 10, username: 'user2', avatar: '/static/images/avatar/2.jpg' },
  { id: 11, username: 'user3', avatar: '/static/images/avatar/3.jpg' },
  { id: 12, username: 'user4', avatar: '/static/images/avatar/4.jpg' },
];

const Story = () => {
    console.log(1111, typeof(av1) );
    
  return (
    <Box sx={{ display: 'flex', overflowX: 'scroll', p: 2, borderBottom: '1px solid #ddd' }}>
      {stories.map((story) => (
        <Box key={story.id} sx={{ textAlign: 'center', mr: 2 }}>
          <Avatar src={story.avatar} sx={{ width: 56, height: 56, border: '2px solid #ff9800' }} />
          <Typography variant="caption">{story.username}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Story;
