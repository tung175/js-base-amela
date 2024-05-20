
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const posts = [
  {
    id: 1,
    username: 'user1',
    avatar: '/static/images/avatar/1.jpg',
    image: '/static/images/posts/1.jpg',
    title: 'Post Title 1',
    description: 'This is a description of the first post.',
  },
  {
    id: 2,
    username: 'user2',
    avatar: '/static/images/avatar/2.jpg',
    image: '/static/images/posts/2.jpg',
    title: 'Post Title 2',
    description: 'This is a description of the second post.',
  },
];

const Post = () => {
  return (
    <Box>
      {posts.map((post) => (
        <Card key={post.id} sx={{ maxWidth: 600, mb: 4 }}>
          <CardHeader
            avatar={<Avatar src={post.avatar} />}
            action={<IconButton><MoreVertIcon /></IconButton>}
            title={post.username}
            subheader="September 14, 2024"
          />
          <CardMedia
            component="img"
            height="300"
            image={post.image}
            alt={post.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Post;
