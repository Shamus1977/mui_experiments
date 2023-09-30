import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Rating from '@mui/material/Rating';
import { getHoursArray } from '../utility/getHoursArray';

//import {business} from '../data/business';

const TestBusinessInfoPaper = ({ business}) => {
  const [isHoursOpen, setIsHoursOpen] = useState();
  const [isAddressOpen, setIsAddressOpen] = useState();
  const { name, 
          description,
          type,
          address,
          hours,
          phone,
          reviews,
          rating,
        } = business;

  const phoneNumber = `${phone.slice(0,3)}-${phone.slice(3,6)}-${phone.slice(6,10)}`;
  const hoursArray = getHoursArray(hours);

  // useEffect(()=>{
  //   //console.log(address);
  //   //console.log(hours);
  //   //console.log(hoursArray);
  // },[]);

  const handleIsHoursOpen = () => {
    setIsAddressOpen(false);
    setIsHoursOpen(!isHoursOpen);
  }

  const handleIsAddressOpen = () => {
    setIsHoursOpen(false);
    setIsAddressOpen(!isAddressOpen);
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Container style={{display:"flex", justifyContent:"center", marginTop:"20px"}} maxWidth="sm">
      <Paper elevation={3} style={{padding:"10px", width:"100%", minWidth:"290px", maxWidth:"400px"}}>
        <Typography variant='subtitle1'>
          Business Type: { type}
        </Typography>
        <Typography variant='subtitle1'>
          Description: { description }
        </Typography>
        <Typography variant='subtitle1'>
          Phone: { phoneNumber }
        </Typography>
          Reviews: ({reviews}) <br/> <Rating value={rating} size="small" name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> <br/>
        <Typography variant='subtitle1' style={{display:'inline'}}>Hours:</Typography>
        <ExpandMore
          expand={isHoursOpen}
          onClick={handleIsHoursOpen}
          aria-expanded={isHoursOpen}
          aria-label="show Hours"
        >
          <ExpandMoreIcon />
        </ExpandMore> <br/>
        <Collapse in={isHoursOpen} timeout="auto" unmountOnExit>
          <Paper elevation={3} style={{position:"absolute", zIndex:"1", width:"280px"}}>
            <Typography variant='subtitle1' style={{padding:"10px"}}>
              Monday: {hoursArray[0]} <br/> Tuesday: {hoursArray[1]}  <br/>
              Wednesday: {hoursArray[2]} <br/> Thursday: {hoursArray[3]}  <br/>
              Friday: {hoursArray[4]}  <br/> Saturday: {hoursArray[5]}  <br/>
              Sunday: {hoursArray[6]} 
            </Typography>
          </Paper>
        </Collapse>
        <Typography variant='subtitle1' style={{display:'inline'}}>Address:</Typography>
        <ExpandMore
          expand={isAddressOpen}
          onClick={handleIsAddressOpen}
          aria-expanded={isAddressOpen}
          aria-label="show Address"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={isAddressOpen} timeout="auto" unmountOnExit>
          <Paper elevation={3} style={{position:"absolute", zIndex:"1", width:"280px"}}>
            <Typography variant='subtitle1' style={{padding:"10px"}}>
              { name } <br />
              {address?.addressLine1} <br/>
              {address?.addressLine2 && address?.addressLine2} {address?.addressLine2 && <br/>}
              {address?.city}, {address?.state}. {address?.zip}
            </Typography>
          </Paper>
        </Collapse>
      </Paper>
    </Container>
  )
}

export default TestBusinessInfoPaper;