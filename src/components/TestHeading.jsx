import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const TestHeading = ({ businessName }) => {
  return (
    <Container style={{marginTop:"20px"}} maxWidth="sm">
      <Typography variant="h1" component='h2' style={{fontFamily:"Arial, Helvetica, sans-serif", textAlign:"center", fontSize:"3rem"}}>
        { businessName }
      </Typography>
      <hr role='presentation' color='black' />
    </Container>
  )
}

export default TestHeading;