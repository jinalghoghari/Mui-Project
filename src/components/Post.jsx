import { Favorite, FavoriteBorder,  Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import Menubtnpost from "./Menubtnpost";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const Post = () => {
  return (
    <Card sx={{ maxWidth: 700 , padding:3 , margin:2 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          //   <IconButton aria-label="settings">
          <Menubtnpost />
          //   </IconButton>
        }
        title="Jinal Ghoghari"
        subheader="August 23, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1549281899-f75600a24107?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton>
        <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon  />}
          />
          </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
