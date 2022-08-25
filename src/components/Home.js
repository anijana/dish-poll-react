import React from "react";
import { Box, Button, styled } from '@mui/material';
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
& > h2, & > button {
  margin-top: 20px;
}

`


const Home = () => {
  const imageURL = "https://images.unsplash.com/photo-1559716229-d8f4e9d01ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
  return (
    <>
      <Box style={{textAlign: 'center'}}>
        <img src={imageURL} alt="home img"  style={{width:'80vh', height:'50vh'}}/>
        
        <Wrapper>
          <h2 style={{fontWeight: '600'}}>Vote for their favourite dishes</h2>
          <Link to={"/pollpage"} style={{textDecoration:'none'}}>
            <Button variant="contained" style={{marginRight:'40px'}}>
               Start Vote
            </Button>
          </Link>
          <Link to={"/pollpage"} style={{textDecoration:'none'}}> 
            <Button variant="contained">
               See the results
            </Button>
          </Link> 
        </Wrapper>
      </Box>
    </>
  );
}

export default Home;