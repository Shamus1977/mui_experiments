import React from 'react';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//import { images } from '../data/images';

const TestImageList = ({ images }) => {
  return (
    <Container style={{display:"flex", justifyContent:"center", marginTop:"20px"}} maxWidth="sm">
      <div style={{border: "solid black 1px", padding:"10px", borderRadius:"5px", width:"100%",maxWidth:"390px", display:"flex", justifyContent:"center"}}>
        <ImageList sx={{ maxWidth:300, minWidth:250,maxHeight:200}} cols={4} rowHeight={70}>
          {images?.map(photo => (
            <ImageListItem key={photo.id}>
              <img
                srcSet={`${photo.imageUrl}?w=70&h=70&fit=crop&auto=format&dpr=2 2x`}
                src={`${photo.imageUrl}?w=70&h=70&fit=crop&auto=format`}
                alt={"yo"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Container>
  )
}

export default TestImageList