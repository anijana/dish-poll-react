import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Box, Button, Typography,LinearProgress, styled  } from '@mui/material';

const Component = styled(Box)`
 
 padding: 50px auto;

`

const Results = () => {
  const [data, setData] = useState([]);
  const [firstRank, setfirstRank] = useState([]);
  const [secondRank, setsecondRank] = useState([]);
  const [thirdRank, setthirdRank] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const rank1 = data.filter(
      item => item.id === JSON.parse(localStorage.getItem("rank1"))
    );

    const rank2 = data.filter(
      item => item.id === JSON.parse(localStorage.getItem("rank2"))
    );

    const rank3 = data.filter(
      item => item.id === JSON.parse(localStorage.getItem("rank3"))
    );

    setfirstRank(rank1);
    setsecondRank(rank2);
    setthirdRank(rank3);
  }, [data]);

  const others = data.filter(
    item =>
      item.id !== JSON.parse(localStorage.getItem("rank3")) &&
      item.id !== JSON.parse(localStorage.getItem("rank2")) &&
      item.id !== JSON.parse(localStorage.getItem("rank1"))
  );

  return (
    <>
      <Component>
          <Link to={'/home'} style={{textDecoration:'none',}}>
            <Button variant="contained" style={{textTransform:'none', fontSize:'20', fontWeight:'600',margin:'20px 0 0 610px',textAlign: 'center'}}>
              Back to Home
            </Button>
          </Link>
          <Typography style={{textAlign: 'center', marginTop:'30px', fontSize:'30px', fontWeigth:'900', color:'red'}}>Results</Typography>
          <Typography style={{textAlign: 'center', marginTop:'30px', fontSize:'30px', fontWeigth:'900', color:'green'}}>Top Three Rank</Typography>
          {
            firstRank.length > 0 ? (
                <Box style={{display:'flex',alignItems: 'center', margin:'20px 0 0 450px',}}>
                    <Typography>{firstRank[0].dishName}</Typography>
                    <LinearProgress variant="determinate" value='30' style={{width:'30%', color:'#fff', margin:'10px'}}/>
                    30 Points
                </Box>
           ) : null}

          {
            secondRank.length > 0 ? (
                  <Box style={{display:'flex',alignItems: 'center', margin:'20px 0 0 450px',}}>
                    <Typography>{secondRank[0].dishName}</Typography>
                    <LinearProgress variant="determinate" value='20' style={{width:'30%', color:'#fff', margin:'10px'}}/>
                    20 Points
                  </Box>
            ) : null} 
          {
            thirdRank.length > 0 ? (
                  <Box style={{display:'flex',alignItems: 'center', margin:'20px 0 0 450px',}}>
                    <Typography>{thirdRank[0].dishName}</Typography>
                    <LinearProgress variant="determinate" value='10' style={{width:'30%', color:'#fff', margin:'10px'}}/>
                    10 Points
                  </Box>
            ) : null} 


            <Typography style={{textAlign: 'center', marginTop:'30px',fontSize:'20px', fontWeigth:'900', color:'red'}}>Others</Typography>
            {
              others.length > 0 ? others.map((item, index) => (
                <Box key={index} style={{display:'flex',alignItems: 'center', margin:'20px 0 0 450px',}}>
                  <Typography>{item.dishName}</Typography>
                  <LinearProgress variant="determinate" value={0} style={{width:'30%', color:'#fff', margin:'10px'}}/>
                  0 Points
                </Box>
              )) : null}
      </Component>
    
    </>
  );
}

export default Results;