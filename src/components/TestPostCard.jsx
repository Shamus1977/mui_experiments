import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Container from '@mui/material/Container';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from '@mui/material';

const TestPostCard = ({ post }) => {

  const {
    author,
    date,
    title,
    subheader,
    alt,
    textBody,
    imageUrl,
    avatarUrl
  } = post;

  return (
    <Container style={{display:"flex", justifyContent:"center", marginTop:"20px"}} maxWidth="sm">
      <Card sx={{ minWidth:290, maxWidth:390}}>
        <CardHeader
          avatar={
            <Avatar alt={author} src={avatarUrl} aria-label={`${author} avatar`} />
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        {imageUrl && (
          <CardMedia
            component="img"
            height="194"
            image={imageUrl}
            alt={alt}
          />)
        }
        <CardContent>
          <Typography variant='body2' color="text.secondary" >
            {textBody}
          </Typography>
        </CardContent>
        <CardActions disableSpacing >
          <IconButton aria-label='like'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <Link style={{marginLeft:"auto"}}>
            <Typography variant='caption' >{author}</Typography>
          </Link>
        </CardActions>
      </Card>
    </Container>
  )
}

export default TestPostCard;